
document.addEventListener("DOMContentLoaded", function () {

    console.log("BlogSphere application loaded successfully.");

    // =========================
    // Mobile Navigation
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }


    // =========================
    // Login Form
    // =========================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const email =
                document.getElementById("login-email").value.trim();

            const password =
                document.getElementById("login-password").value;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            try {

                const response = await fetch(
                    "http://localhost:5000/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    }
                );

                const data = await response.json();

                if (data.success) {
                    alert(data.message || "Login successful!");
                } else {
                    alert(data.message || "Login failed.");
                }

            } catch (error) {

                console.error("Login Error:", error);

                alert(
                    "Unable to connect to the server. Please make sure the backend is running."
                );
            }

        });
    }


    // =========================
    // Register Form
    // =========================

    const registerForm =
        document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("register-email").value.trim();

            const password =
                document.getElementById("register-password").value;

            const confirmPassword =
                document.getElementById("confirm-password").value;

            if (
                name === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert("Please fill in all fields.");
                return;
            }

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }

            if (password !== confirmPassword) {

                alert("Passwords do not match.");
                return;
            }

            try {

                const response = await fetch(
                    "http://localhost:5000/api/auth/register",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: name,
                            email: email,
                            password: password
                        })
                    }
                );

                const data = await response.json();

                if (data.success) {

                    alert(
                        data.message ||
                        "Registration successful!"
                    );

                    registerForm.reset();

                } else {

                    alert(
                        data.message ||
                        "Registration failed."
                    );
                }

            } catch (error) {

                console.error("Register Error:", error);

                alert(
                    "Unable to connect to the server. Please make sure the backend is running."
                );
            }

        });
    }


    // =========================
    // Create Blog Form
    // =========================

    const createBlogForm =
        document.getElementById("createBlogForm");

    if (createBlogForm) {

        createBlogForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();

                const titleElement =
                    document.getElementById("blog-title");

                const categoryElement =
                    document.getElementById("blog-category");

                const contentElement =
                    document.getElementById("blog-content");

                if (
                    !titleElement ||
                    !categoryElement ||
                    !contentElement
                ) {

                    alert("Blog form fields not found.");
                    return;
                }

                const title =
                    titleElement.value.trim();

                const category =
                    categoryElement.value.trim();

                const content =
                    contentElement.value.trim();

                if (
                    title === "" ||
                    category === "" ||
                    content === ""
                ) {

                    alert("Please complete all blog fields.");
                    return;
                }

                try {

                    const response = await fetch(
                        "http://localhost:5000/api/blogs",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type": "application/json"
                            },

                            body: JSON.stringify({
                                title: title,
                                category: category,
                                content: content,
                                author: "Aprajita Mall"
                            })
                        }
                    );

                    const data =
                        await response.json();

                    console.log(
                        "Create Blog Response:",
                        data
                    );

                    if (response.ok && data.success) {

                        alert(
                            data.message ||
                            "Blog published successfully!"
                        );

                        createBlogForm.reset();

                        if (previewTitle) {
                            previewTitle.textContent =
                                "Your Blog Title";
                        }

                        if (previewCategory) {
                            previewCategory.textContent =
                                "Category";
                        }

                        if (previewContent) {
                            previewContent.textContent =
                                "Your blog content will appear here...";
                        }

                        if (characterCount) {
                            characterCount.textContent = "0";
                        }

                    } else {

                        alert(
                            data.message ||
                            "Unable to publish blog."
                        );
                    }

                } catch (error) {

                    console.error(
                        "Create Blog Error:",
                        error
                    );

                    alert(
                        "Unable to connect to the server. Please make sure the backend is running."
                    );
                }

            }
        );
    }


    // =========================
    // Live Blog Preview
    // =========================

    const blogTitle =
        document.getElementById("blog-title");

    const blogCategory =
        document.getElementById("blog-category");

    const blogContent =
        document.getElementById("blog-content");

    const previewTitle =
        document.getElementById("previewTitle");

    const previewCategory =
        document.getElementById("previewCategory");

    const previewContent =
        document.getElementById("previewContent");

    const characterCount =
        document.getElementById("characterCount");


    if (blogTitle && previewTitle) {

        blogTitle.addEventListener("input", function () {

            previewTitle.textContent =
                blogTitle.value.trim() ||
                "Your Blog Title";

        });
    }


    if (blogCategory && previewCategory) {

        blogCategory.addEventListener("change", function () {

            if (blogCategory.value === "") {

                previewCategory.textContent =
                    "Category";

            } else {

                previewCategory.textContent =
                    blogCategory.options[
                        blogCategory.selectedIndex
                    ].text;
            }

        });
    }


    if (blogContent && previewContent) {

        blogContent.addEventListener("input", function () {

            previewContent.textContent =
                blogContent.value.trim() ||
                "Your blog content will appear here...";

            if (characterCount) {

                characterCount.textContent =
                    blogContent.value.length;
            }

        });
    }


    // =========================
    // Login Password Toggle
    // =========================

    const loginPassword =
        document.getElementById("login-password");

    const toggleLoginPassword =
        document.getElementById("toggleLoginPassword");

    if (loginPassword && toggleLoginPassword) {

        toggleLoginPassword.addEventListener(
            "click",
            function () {

                if (loginPassword.type === "password") {

                    loginPassword.type = "text";
                    toggleLoginPassword.textContent = "Hide";

                } else {

                    loginPassword.type = "password";
                    toggleLoginPassword.textContent = "Show";
                }

            }
        );
    }


    // =========================
    // Register Password Toggle
    // =========================

    const registerPassword =
        document.getElementById("register-password");

    const toggleRegisterPassword =
        document.getElementById("toggleRegisterPassword");

    if (registerPassword && toggleRegisterPassword) {

        toggleRegisterPassword.addEventListener(
            "click",
            function () {

                if (registerPassword.type === "password") {

                    registerPassword.type = "text";
                    toggleRegisterPassword.textContent = "Hide";

                } else {

                    registerPassword.type = "password";
                    toggleRegisterPassword.textContent = "Show";
                }

            }
        );
    }


    // =========================
    // Confirm Password Toggle
    // =========================

    const confirmPassword =
        document.getElementById("confirm-password");

    const toggleConfirmPassword =
        document.getElementById("toggleConfirmPassword");

    if (confirmPassword && toggleConfirmPassword) {

        toggleConfirmPassword.addEventListener(
            "click",
            function () {

                if (confirmPassword.type === "password") {

                    confirmPassword.type = "text";
                    toggleConfirmPassword.textContent = "Hide";

                } else {

                    confirmPassword.type = "password";
                    toggleConfirmPassword.textContent = "Show";
                }

            }
        );
    }


    // =========================
    // Load Blogs
    // =========================

    const blogContainer =
        document.getElementById("blogContainer");

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    let allBlogs = [];


    async function loadBlogs() {

        if (!blogContainer) {
            return;
        }

        try {

            const response =
                await fetch(
                    "http://localhost:5000/api/blogs"
                );

            const data =
                await response.json();

            if (!data.success) {

                throw new Error(
                    "Unable to load blogs."
                );
            }

            allBlogs =
                data.blogs;

            displayBlogs(allBlogs);

        } catch (error) {

            console.error(
                "Load Blogs Error:",
                error
            );

            blogContainer.innerHTML = `
                <p>
                    Unable to load blogs.
                    Please make sure the backend is running.
                </p>
            `;
        }
    }


    // =========================
    // Display Blogs
    // =========================

    function displayBlogs(blogs) {

        if (!blogContainer) {
            return;
        }

        blogContainer.innerHTML = "";

        if (blogs.length === 0) {

            blogContainer.innerHTML = `
                <p>No blogs found.</p>
            `;

            return;
        }

        blogs.forEach(function (blog) {

            const article =
                document.createElement("article");

            article.className =
                "blog-card searchable-blog";

            const shortContent =
                blog.content.length > 120
                    ? blog.content.substring(0, 120) + "..."
                    : blog.content;

            article.innerHTML = `

                <div class="blog-content">

                    <span class="category">
                        ${blog.category}
                    </span>

                    <h3>
                        ${blog.title}
                    </h3>

                    <p>
                        ${shortContent}
                    </p>

                    <p>
                        <strong>By:</strong>
                        ${blog.author}
                    </p>

                    <a
                        href="blog-details.html?id=${blog.id}"
                        class="read-more"
                    >
                        Read More →
                    </a>

                </div>

            `;

            blogContainer.appendChild(article);

        });
    }


    // =========================
    // Search & Filter
    // =========================

    function filterBlogs() {

        if (!searchInput || !categoryFilter) {
            return;
        }

        const searchText =
            searchInput.value
                .trim()
                .toLowerCase();

        const selectedCategory =
            categoryFilter.value
                .trim()
                .toLowerCase();

        const filteredBlogs =
            allBlogs.filter(function (blog) {

                const blogText =
                    (
                        blog.title +
                        " " +
                        blog.content +
                        " " +
                        blog.author +
                        " " +
                        blog.category
                    ).toLowerCase();

                const matchesSearch =
                    blogText.includes(searchText);

                const matchesCategory =
                    selectedCategory === "all" ||
                    blog.category
                        .toLowerCase()
                        .includes(selectedCategory);

                return (
                    matchesSearch &&
                    matchesCategory
                );
            });

        displayBlogs(filteredBlogs);
    }


    if (searchInput && categoryFilter) {

        searchInput.addEventListener(
            "input",
            filterBlogs
        );

        categoryFilter.addEventListener(
            "change",
            filterBlogs
        );
    }


    if (blogContainer) {
        loadBlogs();
    }

});

