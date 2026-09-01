require("dotenv").config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const blogRoutes =
    require("./routes/blogRoutes");
const express = require("express");
const cors = require("cors");

const app = express();
connectDB();

const PORT = 5000;

// Middleware


app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Home Route


app.get("/", (req, res) => {

    res.json({
        message: "BlogSphere Backend API is running successfully."
    });

});


// Health Check API


app.get("/api/health", (req, res) => {

    res.status(200).json({
        success: true,
        message: "BlogSphere server is healthy."
    });

});

// Start Server


app.listen(PORT, () => {

    console.log(
        `BlogSphere server running at http://localhost:${PORT}`
    );

});