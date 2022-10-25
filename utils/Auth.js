const useAuth = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login');
    }else {
        next();
    }
};

module.exports = useAuth;
//authentication for the models