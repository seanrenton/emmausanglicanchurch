var User = require('./models/users')

module.exports = {
    isLoggedIn : (req, res, next)=>{
        if(req.session.uid){
            next()
        }else{
            res.status(403).send('Not found!');
        }
    },

    isAdmin : (req, res, next)=>{
        User.findOne({_id : req.session.uid},
        (err, user)=>{
            if(user && (user.role > 1)){
                next()
            }else{
                res.status(403).send('Not found!');
            }
        })
    }
}