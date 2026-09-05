const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// ==============================
// Create Blog
// ==============================

router.post("/", async (req, res) => {
    try {
        const {
            title,
            category,
            content,
            author
        } = req.body;

        // Validate fields
        if (!title || !category || !content || !author) {
            return res.status(400).json({
                success: false,
                message: "Title, category, content and author are required."
            });
        }

        // Create blog in MongoDB
        const newBlog = await Blog.create({
            title,
            category,
            content,
            author
        });

        res.status(201).json({
            success: true,
            message: "Blog created successfully.",
            blog: newBlog
        });

    } catch (error) {
        console.error("Create blog error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating blog."
        });
    }
});


// ==============================
// Get All Blogs
// ==============================

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: blogs.length,
            blogs
        });

    } catch (error) {
        console.error("Get blogs error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching blogs."
        });
    }
});


// ==============================
// Get Single Blog
// ==============================

router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

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

    } catch (error) {
        console.error("Get single blog error:", error);

        res.status(400).json({
            success: false,
            message: "Invalid blog ID."
        });
    }
});


module.exports = router;