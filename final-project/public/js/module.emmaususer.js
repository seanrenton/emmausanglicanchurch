angular.module('Emmaus', ['ngRoute'])
       .config(ngRouter)

ngRouter.$inject = ['$routeProvider', 'locationProvider'];

function ngRouter ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.otherwise('/');
  
  $routeProvider
    .when('/', {
    templateUrl : '/html/home.html',
    controller : 'userCtrl',
    controllerAs : 'user'
  })
  .when('/events', {
    templateUrl : '/html/events.html',
    controller : 'eventsCtrl',
    controllerAs : 'events'
  })
  .when('/about', {
    templateUrl : '/html/about.html',
    controller : 'userCtrl',
    controllerAs : 'user'
  })
  .when('/contact', {
    templateUrl : '/html/contact.html',
    controller : 'userCtrl',
    controllerAs : 'user'
  })
  .when('/register', {
    templateUrl : '/html/signup.html',
    controller : 'userCtrl',
    controllerAs : 'user'
  })
  .when('/search', {
    templateUrl : '/html/search.html',
    controller : 'searchCtrl',
    controllerAs : 'search'
  })
      
}