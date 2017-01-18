angular.module("Emmaus")
    .controller('searchCtrl', searchCtrl)


    seachCtrl.$inject = ['Auth', '$location', '$http'];



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



        search.searchUsers = function(){
            $http({
                method : 'GET',
                url : '/api/search'
            }).then(function(response){
                search.users = response.data;
            });
        }
        search.searchUsers();
    }