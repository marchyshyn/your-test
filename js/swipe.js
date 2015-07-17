 var IMG_WIDTH = 1024;
 var cerrentBlock = 0;
 var maxBlock = 2;
 var speed = 500;
 var swipe_wrapper;
 var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeStatus: swipeStatus,
    allowPageScroll: "vertical",
    threshold: 75
};

$(function () {
    swipe_wrapper = $("#swipe_wrapper");
    swipe_wrapper.swipe(swipeOptions);
});

function swipeStatus(event, phase, direction, distance) {
    if (phase == "move" && (direction == "left" || direction == "right")) {
        var duration = 0;
        if (direction == "left") {
            scrollImages((IMG_WIDTH * cerrentBlock) + distance, duration);
        } else if (direction == "right") {
            scrollImages((IMG_WIDTH * cerrentBlock) - distance, duration);
        }
    } else if (phase == "cancel") {
        scrollImages(IMG_WIDTH * cerrentBlock, speed);
    } else if (phase == "end") {
        if (direction == "right") {
            previousImage();
        } else if (direction == "left") {
            nextImage();
        }
    }
}

function previousImage() {
    cerrentBlock = Math.max(cerrentBlock - 1, 0);
    scrollImages(IMG_WIDTH * cerrentBlock, speed);
}

function nextImage() {
    cerrentBlock = Math.min(cerrentBlock + 1, maxBlock - 1);
    scrollImages(IMG_WIDTH * cerrentBlock, speed);
}

function scrollImages(distance, duration) {
    swipe_wrapper.css("transition-duration", (duration / 1000).toFixed(1) + "s");
    var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
    swipe_wrapper.css("transform", "translate(" + value + "px,0)");
}