angular.module("Emmaus", ['ngRoute']);

angular.module('Emmaus')
       .config(Router);

Router.$inject = ['$routeProvider'];

var newEvent = [];
var newSignup = {};
// var newComment = {};
var newEmail = [];


function Router($routeProvider){
  
  $routeProvider
      .when('/html/home', {
    templateUrl: '/home.html',
    
    controller: 'emmausController',
    
    controllerAs: 'eCtrl'
  })
    .when('/events', {
    templateUrl: '/html/events.html',
    
    controller: 'emmausController',
    
    controllerAs: 'eCtrl'
  })
  .when('/contact', {
    templateUrl: '/html/contact.html',
    
    controller: 'emmausController',
    
    controllerAs: 'eCtrl'
  })
  .when('/about', {
    templateUrl: '/html/about.html',
    
    controller: 'emmausController',
    
    controllerAs: 'eCtrl'
  })
  .when('/signup', {
    templateUrl: '/html/signup.html',
    
    controller: 'emmausController',
    
    controllerAs: 'eCtrl'
  })
}

angular.module('Emmaus')
       .controller("emmausController", church);

function church(){
  var eCtrl = this;
  
  eCtrl.greeting = "Welcome To Emmaus Anglican Church's Home Page";
  
  eCtrl.eventgreeting = "Sign Up For Events Below!"


  eCtrl.contactObj = {
    Phone: 303-663-3372,
    Email: "sdlksf@gmail.com",
    Address: "995 N Ridge Rd, Castle Rock, CO 80104"
  }
  
  eCtrl.Events = [
    
  ]
      
  
  eCtrl.addEvent = function(){
    console.log("adding event");
    eCtrl.newEvent.Comment = [];
    eCtrl.Events.push(eCtrl.newEvent);
    
      
    eCtrl.newEvent = [];
  }
  
  
  eCtrl.addComment = function(event){
    console.log('add comment');
    event.Comment.push(eCtrl.comment);
        
    eCtrl.comment = "";
  }
  
   
  
  eCtrl.Email = [
    {
      email: "email@example.com"
    }
  ]
  
  eCtrl.userEmail = function(){
   console.log('add email');
  eCtrl.Email.push(eCtrl.newEmail);
  
  eCtrl.newEmail = [];
}
  eCtrl.removeEvent = function(index){
    console.log("removing last event");
    eCtrl.Events.splice(index, 1);
    
  }

  
}


angular.module('Emmaus')
.factory("churchFactory", emmausFactory);

function emmausFactory(){
  
}
