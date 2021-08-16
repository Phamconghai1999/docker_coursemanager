const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

// @route POST api/course/create
// @desc Create course
// @access Private  
router.post('/create',verifyToken ,async (req, res) => {
    
    let {title, description,url,state} = req.body;
    
    if (!title) {
        return res.status(400).json({success: false, message:"Title must be specified"});
    }

    try {   
        const newCourse = new Course({
            title,
            description,            
            url: (url.startsWith("https://")) ? url : `https://${url}`,
            state: state || 'TO DO',
            user: req.body.UserId,
        });
        await newCourse.save();
        return res.status(200).json({success: true, message:"Created new course successfully!", course: newCourse});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:"SERVER ERROR"});
    }

});

module.exports = router
