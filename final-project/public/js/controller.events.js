angular.module('Emmaus')
    .controller('eventsCtrl', eventsCtrl)

eventsCtrl.$inject = ['Auth', '$location']


function eventsCtrl(Auth, $location) {
    var event = this;

    event.Auth = Auth;

    Auth.checkAuth()
        .then(function (returnData) {
            console.log(returnData)

            if (!returnData.data) {
                $location.url('/signup');
            } else {
                Auth.user = returnData.data

                $location.url('/events');
            }
        }
        ),

        event.newEvent = {};
        event.newVolunteer = {};

    event.Events = [
        {
            name: '',
            date: '',
            time: ''
        }
    ];


    event.addEvent = function () {
        console.log('Adding event');
        event.Events.push(event.newEvent);

        event.newEvent = {};

    }

    event.removeEvent = function () {
        event.newEvent.pop(newEvent);

        event.newEvent = {};
    }


    // event.signUp = function () {
    //     event.
    // }
}