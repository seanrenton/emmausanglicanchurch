angular.module("Emmaus")
    .controller('searchCtrl', searchCtrl)


    searchCtrl.$inject = ['Auth', '$location', '$http'];



    function searchCtrl(Auth, $location, $http){
        var search = this;

        search.Auth = Auth;
        Auth.checkAuth()
            .then(function(returnData){
                console.log(returnData)

                if(!returnData.data){
                    $location.url('/signup');
                }else{
                    Auth.user = returnData.data
                }
            })



        search.getUsers = function(){
            $http({
                method : 'GET',
                url : '/api/users'
            }).then(function(response){
                search.users = response.data;
            });
        }
        search.getUsers();
    }

        