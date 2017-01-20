angular.module('Emmaus')
    .controller('eventsCtrl', eventsCtrl);
    

eventsCtrl.$inject = ['Auth', '$location', '$http', 'Events'];


function eventsCtrl(Auth, $location, $http, Events) {
    var event = this;
    
    console.log('eventsCtrl running', event)
    event.Auth = Auth;

    Auth.checkAuth()
        .then(function (returnData) {
            console.log(returnData)

            if (!returnData.data) {
                $location.url('/signup');
            } else {
                Auth.user = returnData.data

                Events.get()
                    .then(function(returnData){
                        event.Events = returnData.data
                    })
            }
        })

        event.eventPost = function(){
            console.log('posting')
            $http
                .post('/api/events/post', event.postEvent)
                .then(function(returnData){
                    console.log('Event: ', returnData);
                    if(returnData.data){
                        eventpost = returnData.data

                        event.eventGet();
                    }
                })
        }
        event.eventGet = function(){
            $http
                .get('/api/events', event.getEvent)
                .then(function(returnData){
                    console.log('Events: ', returnData);
                    if(returnData.data){
                        event.Events = returnData.data
                    }
                })
        }
        
        
        
        event.newEvent = {};
        event.newVolunteer = {};

    

    event.addEvent = function () {
        console.log('Adding event');
        event.Events.push(event.newEvent);

        event.newEvent = {};

    }

    event.removeEvent = function (event) {
        event.newEvent[event].splice(event, 1);

        event.newEvent = {};
    }


    event.signUp = function () {
        
    }

    
}