//requireing everything for the apis
const router = require('express').Router();
const { Comment } = require('../../models/');
const useAuth = require('../../utils/Auth');

//router.post to make new comments
router.post('/', useAuth, async (req, res) => {
    try {
        const newComm = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(newComm);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;