angular.module('testApp', []);

var mainControllerFunction = function($scope) {
  // controller code
  $scope.greeting = 'Hello, Class!';

  var excitement = 0;
  $scope.excite = function(){
    excitement++;
    if(excitement>5) {
      $scope.greeting = 'Class is excited!';
    }
  };

};

var secondaryControllerFunction = function($scope) {
  // controller code
  $scope.greet = 'Hello, World!';

  var roadhouseMovie = {
    'title': 'Roadhouse',
    'genre': 'Comedy-Drama',
    'lead actor': 'Patrick'
  };
  var jurassicMovie = {
    'title': 'Jurassic Park 16',
    'genre': 'Comedy',
    'lead actor': 'Yusef'
  };
  var theNotebook = {
    'title': 'The Notebook',
    'genre': 'Romance',
    'lead actor': 'Ryan Gosling'
  };

  $scope.movies = [roadhouseMovie, jurassicMovie, theNotebook];

  $scope.students = ['Johnny', 'Alex', 'Amber', 'Billy'];
};

angular.module('testApp')
  .controller('mainController', ['$scope', mainControllerFunction])
  .controller('secondaryController', ['$scope', secondaryControllerFunction]);

// another way!

// var myApp = angular.module('testApp', []);

// myApp.controller('mainControllerFunction', function($scope) {
//   $scope.greeting = 'Hello, Class!';
// });

// myApp.controller('secondaryControllerFunction', function($scope) {
//    $scope.greet = 'Hello, World!';
// });
