var Event = require('../models/events');

module.exports = {
    create: (req, res) => {
        var newEvent = new Event(req.body);

        newEvent.save((err, event) => {
            if (err) {
                return res.send(err)
            } res.send(event);
        })
    },

    get: (req, res) => {
        Event.find({}).populate('volunteers').exec((err, events) => {
            if (err) {
                console.log('No event found!');
                return res.send(err)
            }
            res.send(events);
        })
    },
    update: (req, res) => {
        Event.update({ _id: req.params.id }, req.body, (err, update) => {
            if (err) {
                return res.send(err)
            }
            res.send(update)
        })
    }
}
