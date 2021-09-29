    const router = require('express').Router();
    

    // Securing profile view
    const authCheck = (req, res, next) => {

        if(!req.user) {
            // if user is not logged in
            req.flash('danger',  'Please log in.');
            res.redirect('/auth/login');
        } else {
            // if user is logged in
            next();
        }
    }

    router.get('/', authCheck, (req, res) => {
        res.render('profile', { 
            user: req.user
        }); 
    });


    module.exports = router;








