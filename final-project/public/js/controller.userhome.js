angular.module('Emmaus')
  .controller('userCtrl', userCtrl);

userCtrl.$inject = ['$http', 'Auth'];

function userCtrl ($http, Auth) {
  var user = this;
  
  user.Auth = Auth;
  
  user.signup = function(){
    $http
      .post('/api/users', user.signupUser)
      .then(function(returnData){
      console.log('SIGNUP : ', returnData);
      if(returnData.data._id){
        Auth.user = returnData.data
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
            }
            });
  }
}