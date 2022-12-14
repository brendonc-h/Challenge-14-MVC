const router = require('express').Router();
const { Post } = require('../models/');
const useAuth = require('../utils/Auth');

router.get('/', useAuth, async (req, res) => {
    try {
        const postData = await Post.findAll ({
            where: {
                userId: req.session.userId,
            },
        });

        const posts = postData.map((post) => post.get({ plain: true}));
        res.render('dashboard-posts', {
            layout: 'dashboard',
            posts,
        });
    }catch (err) {
        res.redirect('login');
    }
});

router.get('/new', useAuth, (req,res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

router.get('/edit/:id', useAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if(postData) {
            const post = postData.get({ plain: true});

            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        }else {
            res.status(404).end();
        }
    }catch (err) {
        res.redirect('login');
    }
});

module.exports = router;