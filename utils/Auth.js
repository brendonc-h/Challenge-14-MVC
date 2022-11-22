const useAuth = (req, res, next) => {
    if (!req.session.userId) {
        console.log('redirect');
        res.redirect('/login');
    }else {
        next();
    }
};

module.exports = useAuth;
//authentication for the models