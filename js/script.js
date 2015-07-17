var yourTest = angular.module('yourTest', []);

yourTest.controller('testList', function ($scope) {
  $scope.documents=[
  {'id': 'documents1', 'name': 'Article Name №1', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents2', 'name': 'Article Name №2', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents3', 'name': 'Article Name №3', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents4', 'name': 'Article Name №4', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents5', 'name': 'Article Name №5', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents6', 'name': 'Article Name №6', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents7', 'name': 'Article Name №7', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents8', 'name': 'Article Name №8', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents9', 'name': 'Article Name №9', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents10', 'name': 'Article Name №10', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents11', 'name': 'Article Name №11', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents12', 'name': 'Article Name №12', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents13', 'name': 'Article Name №13', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents14', 'name': 'Article Name №14', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents15', 'name': 'Article Name №15', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents16', 'name': 'Article Name №16', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents17', 'name': 'Article Name №17', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents18', 'name': 'Article Name №18', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents19', 'name': 'Article Name №19', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'},
  {'id': 'documents20', 'name': 'Article Name №20', 'description': 'Authors, name of edition, publishing year,(more info?)', 'imageUrl': 'img/documents.png'}
  ];

  $scope.links=[
  {'id': 'links1', 'name': 'Links Name №1', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links2', 'name': 'Links Name №2', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links3', 'name': 'Links Name №3', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links4', 'name': 'Links Name №4', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links5', 'name': 'Links Name №5', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links6', 'name': 'Links Name №6', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links7', 'name': 'Links Name №7', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links8', 'name': 'Links Name №8', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links9', 'name': 'Links Name №9', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links10', 'name': 'Links Name №10', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links11', 'name': 'Links Name №11', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links12', 'name': 'Links Name №12', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links13', 'name': 'Links Name №13', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links14', 'name': 'Links Name №14', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links15', 'name': 'Links Name №15', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links16', 'name': 'Links Name №16', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links17', 'name': 'Links Name №17', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links18', 'name': 'Links Name №18', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links19', 'name': 'Links Name №19', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'},
  {'id': 'links20', 'name': 'Links Name №20', 'description': 'second line text', 'imageUrl': 'img/links.png', 'href': 'www.google.com.ua'}
  ];

  $scope.scienceLabs=[
  {'id': 'scienceLabs1', 'name': 'Science Lab Name №1', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs2', 'name': 'Science Lab Name №2', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs3', 'name': 'Science Lab Name №3', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs4', 'name': 'Science Lab Name №4', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs5', 'name': 'Science Lab Name №5', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs6', 'name': 'Science Lab Name №6', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs7', 'name': 'Science Lab Name №7', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs8', 'name': 'Science Lab Name №8', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs9', 'name': 'Science Lab Name №9', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs10', 'name': 'Science Lab Name №10', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs11', 'name': 'Science Lab Name №11', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs12', 'name': 'Science Lab Name №12', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs13', 'name': 'Science Lab Name №13', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs14', 'name': 'Science Lab Name №14', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs15', 'name': 'Science Lab Name №15', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs16', 'name': 'Science Lab Name №16', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs17', 'name': 'Science Lab Name №17', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs18', 'name': 'Science Lab Name №18', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs19', 'name': 'Science Lab Name №19', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'},
  {'id': 'scienceLabs20', 'name': 'Science Lab Name №20', 'description': 'second line text', 'imageUrl': 'img/scienceLabs.png', 'href': 'www.google.com.ua'}
  ];

  $scope.check = function(employeeName){
      var idx = -1;
      angular.forEach($scope.selection, function (sec) {
          if(sec['employeeName'] == employeeName) idx = $scope.selection.indexOf(sec);
      });
      return idx;
  }

  $scope.selection=[];
  $scope.toggleSelection = function toggleSelection(employeeName, cat, employeeSnippet) {
      var idx = -1;
      angular.forEach($scope.selection, function (sec) {
          if(sec['employeeName'] == employeeName) idx = $scope.selection.indexOf(sec);
      });
      if (idx > -1) {
         $scope.selection.splice(idx, 1);
     }
     else {
       $scope.selection.push({
           employeeName: employeeName,
           employeeSnippet: employeeSnippet,
           cat: cat
       });
   }
   var i = 0;
   angular.forEach($scope.selection, function (sec) {
    if(sec['cat'] == 'items') i++;
});
   if (i == $scope.items.length) $scope.selectedAllItems = true;
};

$scope.checkAllDocuments = function () {
    if ($scope.selectedAllDocuments) {
        $scope.selectedAllDocuments = true;
    } else {
        $scope.selectedAllDocuments = false;
    }
    angular.forEach($scope.documents, function (item) {
        var idx = -1;
        angular.forEach($scope.selection, function (sec) {
            if(sec['employeeName'] == item.name) idx = $scope.selection.indexOf(sec);
        });
        if (!$scope.selectedAllDocuments){
            if (!idx > -1){
                $scope.selection.push({
                   employeeName: item.name,
                   employeeSnippet: item.description,
                   cat: 'items'
               });
            }
        }else{
            $scope.selection.splice(idx, 1);
        }
    });
};

$scope.checkAllLinks = function () {
    if ($scope.selectedAllLinks) {
        $scope.selectedAllLinks = true;
    } else {
        $scope.selectedAllLinks = false;
    }
    angular.forEach($scope.links, function (item) {
        var idx = -1;
        angular.forEach($scope.selection, function (sec) {
            if(sec['employeeName'] == item.name) idx = $scope.selection.indexOf(sec);
        });
        if (!$scope.selectedAllLinks){
            if (!idx > -1){
                $scope.selection.push({
                   employeeName: item.name,
                   employeeSnippet: item.description,
                   cat: 'items'
               });
            }
        }else{
            $scope.selection.splice(idx, 1);
        }
    });
};

$scope.checkAllScienceLabs = function () {
    if ($scope.selectedAllScienceLabs) {
        $scope.selectedAllScienceLabs = true;
    } else {
        $scope.selectedAllScienceLabs = false;
    }
    angular.forEach($scope.scienceLabs, function (item) {
        var idx = -1;
        angular.forEach($scope.selection, function (sec) {
            if(sec['employeeName'] == item.name) idx = $scope.selection.indexOf(sec);
        });
        if (!$scope.selectedAllScienceLabs){
            if (!idx > -1){
                $scope.selection.push({
                   employeeName: item.name,
                   employeeSnippet: item.description,
                   cat: 'items'
               });
            }
        }else{
            $scope.selection.splice(idx, 1);
        }
    });
};

$scope.remove = function (name){
    var index = $scope.selection.indexOf(name);
    $scope.selection.splice(index, 1);
};
});