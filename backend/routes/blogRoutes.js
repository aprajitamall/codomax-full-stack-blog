const express = require("express");

const router = express.Router();


// Temporary blog storage

const blogs = [];

// Create Blog
router.post("/", (req, res) => {

    const {
        title,
        category,
        content,
        author
    } = req.body;


    // Validate fields

    if (
        !title ||
        !category ||
        !content ||
        !author
    ) {

        return res.status(400).json({

            success: false,

            message:
                "Title, category, content and author are required."

        });

    }


    // Create blog

    const newBlog = {

        id: blogs.length + 1,

        title,

        category,

        content,

        author,

        createdAt: new Date().toISOString()

    };


    blogs.push(newBlog);


    res.status(201).json({

        success: true,

        message: "Blog created successfully.",

        blog: newBlog

    });

});


// ==============================
// Get All Blogs
// ==============================

router.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        count: blogs.length,

        blogs

    });

});


// ==============================
// Get Single Blog
// ==============================

router.get("/:id", (req, res) => {

    const blogId =
        parseInt(req.params.id);


    const blog =
        blogs.find(
            blog => blog.id === blogId
        );


    if (!blog) {

        return res.status(404).json({

            success: false,

            message: "Blog not found."

        });

    }


    res.status(200).json({

        success: true,

        blog

    });

});


module.exports = router;