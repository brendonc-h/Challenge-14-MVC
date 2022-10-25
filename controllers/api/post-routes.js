//require for express models
const router = require('express').Router();
const { Post } = require('../../models/');
const useAuth = require('../../utils/auth');

//post route for new posts

router.post('/', useAuth, async (req, res) => {
    const body = req.body;

    try {
        const 
    }
})