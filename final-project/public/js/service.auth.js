angular.module('Emmaus')
    .service('Auth', auth)

    auth.$inject = ['$http']


    function auth($http){
        this.checkAuth = function(){
            return $http.get('/api/me')
        }
    }