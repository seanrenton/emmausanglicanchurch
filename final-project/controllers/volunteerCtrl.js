var Volunteer = require('../models/volunteer');

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            Volunteer.findOne({ _id: req.params.id },
                (err, volunteer) => {
                    res.send(region);
                });
        } else {
            Volunteer.find({}, (err, volunteers) => {
                res.send(regions);
            });
        }
    },

    create: (req, res) => {
        var newVolunteer = new Volunteer(req.body);

        newVolunteer.save((err, volunteer) => {
            if (err) {
                return res.send(err)
            }
            res.send(volunteer);
        });
    }
}