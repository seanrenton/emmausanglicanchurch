angular.module("Emmaus")
    .controller('searchCtrl', searchCtrl)


    seachCtrl.$inject = ['Auth', '$location', '$http'];



    function searchCtrl(Auth, $location, $http){
        var search = this;

        search.Auth = Auth;



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