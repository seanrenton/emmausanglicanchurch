angular.module('Emmaus')
    .controller('eventsCtrl', eventsCtrl)

    eventsCtrl.$inject = ['Auth', '$location']


    function eventsCtrl (Auth, $location){
        var event = this;

        event.Auth = Auth;

        Auth.checkAuth()
            .then(function(returnData){
                console.log(returnData){
                    console.log(returnData)

                    if(!returnData.data){
                        $location.url('/signup');
                    } else {
                        Auth.user = returnData.data
                    }
                }
            })
    }