angular.module('Emmaus')
    .factory('Events', Events);


    Events.$inject = ['$http'];


    function Events($http){


        return {

            get : function(){
                return $http.get('/api/events')
            }
        }
    }