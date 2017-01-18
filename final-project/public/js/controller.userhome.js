angular.module('Emmaus')
  .controller('userCtrl', userCtrl);

userCtrl.$inject = ['$http', 'Auth', '$location'];

function userCtrl ($http, Auth, $location) {
  var user = this;
  
  user.Auth = Auth;
  console.log('User ctrl running')
  user.signup = function(){
    console.log('SIGNUP')
    $http
      .post('/api/users', user.signupUser)
      .then(function(returnData){
      console.log('SIGNUP : ', returnData);
      if(returnData.data._id){
        Auth.user = returnData.data
        $location.url('/events');
      }
    });
  }
  
  user.login = function(){
    $http
      .post('/api/users/login', user.loginUser)
      .then(function(returnData){
            console.log('LOGIN : ', returnData);
            if(returnData.data._id){
              Auth.user = returnData.data
              $location.url('/events');
            }
            });
  }

  
}