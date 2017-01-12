var User = require('../models/users'),
    bcrypt = require('bcryptjs'),
    errors = {
        general: {
            status: 500,
            message: 'Backend Error'
        },
        login: {
            status: 403,
            message: 'Invalid username or password.'
        }
    };


module.exports = {
    logout: (req, res) => {
        req.session.reset();

        res.redirect('/home.html');
    },
    login: (req, res) => {
        console.info('auth.login.payload:', req.body);

        userAuth.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                console.error('MongoDB error:', err);

                return res.status(500).json(errors.general);
            }
            if (!user || !user.password) {
                console.war('No user or user.password found!', user);

                res.status(403).json(errors.login);
            } else {
                console.info('auth.login.user', user);

                bcrypt.compare(req.body.password, user.password, (bcryptErr, matched) => {
                    if (bycrptErr) {
                        console.error('MongoDB error:', bcryptErr);

                        res.status(500).json(errors.general);
                    } else if (!matched) {
                        console.warn('Password did not match!');

                        res.status(403).json(errors.login);
                    } else {
                        req.session.uid = user._id;

                        res.send({ message: 'Login success' });
                    }
                });
            }

        });
    },

    register: (req, res) => {
        console.info('Register payload:', req.body);

        var newUser = new User(req.body);

        newUser.save((err, user) => {
            if (err) {
                console.error('#ERROR#', 'Could not save new user', err)
                res.status(500).send(errors.general);
            } else {
                console.log('New user created in MongoDB:', user);
                req.session.uid = user._id;

                res.send({ message: 'Register success' });
            }

        });
    },
    session: (req, res, next) => {
        if (req.session.uid) {
            console.info('User is logged in, proceeding to dashboard.');
            next();
        } else {
            console.warn('User is not logged in')
            res.redirect('/home.html');
        }
    }
}
