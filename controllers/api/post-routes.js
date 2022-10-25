//require for express models
const router = require('express').Router();
const { Post } = require('../../models/');
const useAuth = require('../../utils/auth');

//post route for new posts

router.post('/', useAuth, async (req, res) => {
    const body = req.body;

    try {
        const postNew = await Post.create({ ...body, userId: req.session.userId });
        res.json(postNew);
    }catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', useAuth, async (req, res) => {
    try{
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0 ) {
            res.status(200).end();
        }else {
            res.status(404).end();
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', useAuth, async (req, res) => {
    try {
        const [affectedRows] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        }else {
            res.status(404).end();
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;