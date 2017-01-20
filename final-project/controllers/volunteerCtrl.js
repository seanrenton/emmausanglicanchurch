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
    }

