//Création et nommage du module et appel de ngRoute
var fieldCheck = angular.module('app', ['ngRoute']);
//Le module.run permet d'éxécuter du code juste après sa création. Dans notre cas, nous initialisons un tableau
fieldCheck.run(['$rootScope', function($rootScope){
    $rootScope.mailContent = [];
}]);
//Configuration du module fieldCheck pour gérer les différentes vues grace aux routes
fieldCheck.config(['$routeProvider', function($routeProvider) {
  //Je configure mon routeProvider pour que la racine (/) affiche mon fomulaire
  $routeProvider.when('/', {templateUrl : 'view/form.html', controller: 'formController'})
  //Je le configure ensuite pour que ma vue de mail (/mailView) affiche les détails du message
                .when('/:subjectName', {templateUrl: 'view/mailView.html', controller: 'formController'})
  }]);
//Définition du controller formController
fieldCheck.controller('formController', ['$scope','$rootScope', '$routeParams', function($scope,$rootScope, $routeParams) {
  //J'initialise un tableau à vide
  $scope.subjectName = $routeParams.subjectName;
  $scope.mailSend = function() {
    //Je stocke les valeurs des différents champs du form dans le tableau
    $rootScope.mailContent.push({name: $scope.name, email: $scope.email, subject: $scope.subject, message: $scope.message});
  };
}]);
