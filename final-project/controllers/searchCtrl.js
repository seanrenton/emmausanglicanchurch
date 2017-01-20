var User = require('../models/users');

module.exports = {

    get: (req, res) => {

        if (req.params.id) {
            User.findOne({ _id: req.params.id }).populate('region').exec((err, user) => {
                if (err) {
                    return res.send(err)
                }
                if (user) {
                    res.send(user)
                }
                else {
                    res.send({ badNews: 'No Users Found' });
                }
            });
        }
        else {
            var query = {};

            for (var param in req.query) {
                query[param] = req.query[param];
            }

            User
                .find(query)
                .populate('region', 'name')
                .exec((err, users) => {
                    if (err) {
                        return res.send(err);
                    }
                    res.send(users)
                })
        }

    }
}