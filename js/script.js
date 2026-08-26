document.addEventListener("DOMContentLoaded", function () {

    console.log("BlogSphere application loaded successfully.");


    // =========================
    // Login Form
    // =========================

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email =
                document.getElementById("login-email").value.trim();

            const password =
                document.getElementById("login-password").value;


            if (email === "" || password === "") {

                alert("Please fill in all fields.");

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;
            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            alert("Login form submitted successfully!");

        });

    }


    // =========================
    // Register Form
    // =========================

    const registerForm =
        document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

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


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

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


            alert(
                "Registration form submitted successfully!"
            );

        });

    }


    // =========================
    // Create Blog Form
    // =========================

    const createBlogForm =
        document.getElementById("createBlogForm");

    if (createBlogForm) {

        createBlogForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const title =
                document.getElementById("blog-title").value.trim();

            const category =
                document.getElementById("blog-category").value;

            const content =
                document.getElementById("blog-content").value.trim();


            if (
                title === "" ||
                category === "" ||
                content === ""
            ) {

                alert("Please complete all blog fields.");

                return;
            }


            if (title.length < 5) {

                alert(
                    "Blog title must contain at least 5 characters."
                );

                return;
            }


            if (content.length < 20) {

                alert(
                    "Blog content must contain at least 20 characters."
                );

                return;
            }


            alert("Blog submitted successfully!");

        });

    }


    // =========================
    // Blog Search & Category Filter
    // =========================

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const blogCards =
        document.querySelectorAll(".searchable-blog");


    function filterBlogs() {

        const searchText =
            searchInput.value
                .trim()
                .toLowerCase();


        const selectedCategory =
            categoryFilter.value
                .trim()
                .toLowerCase();


        blogCards.forEach(function (blog) {

            const blogText =
                blog.textContent.toLowerCase();


            const categoryElement =
                blog.querySelector(".category");


            let blogCategory = "";


            if (categoryElement) {

                blogCategory =
                    categoryElement.textContent
                        .trim()
                        .toLowerCase();

            }


            const matchesSearch =
                blogText.includes(searchText);


            let matchesCategory = true;


            if (selectedCategory !== "all") {

                matchesCategory =
                    blogCategory.includes(
                        selectedCategory
                    );

            }


            if (
                matchesSearch &&
                matchesCategory
            ) {

                blog.style.display = "";

            } else {

                blog.style.display = "none";

            }

        });

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


    // =========================
    // Mobile Navigation
    // =========================

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle("active");

            }
        );

    }


    // =========================
    // Create Blog Live Preview
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


    if (
        blogTitle &&
        blogCategory &&
        blogContent
    ) {


        // Blog Title Preview

        blogTitle.addEventListener(
            "input",
            function () {

                if (
                    blogTitle.value.trim() === ""
                ) {

                    previewTitle.textContent =
                        "Your Blog Title";

                } else {

                    previewTitle.textContent =
                        blogTitle.value;

                }

            }
        );


        // Blog Category Preview

        blogCategory.addEventListener(
            "change",
            function () {

                if (blogCategory.value === "") {

                    previewCategory.textContent =
                        "Category";

                } else {

                    previewCategory.textContent =
                        blogCategory.options[
                            blogCategory.selectedIndex
                        ].text;

                }

            }
        );


        // Blog Content Preview

        blogContent.addEventListener(
            "input",
            function () {

                if (
                    blogContent.value.trim() === ""
                ) {

                    previewContent.textContent =
                        "Your blog content will appear here...";

                } else {

                    previewContent.textContent =
                        blogContent.value;

                }


                if (characterCount) {

                    characterCount.textContent =
                        blogContent.value.length;

                }

            }
        );

    }


    // =========================
    // Show / Hide Login Password
    // =========================

    const loginPassword =
        document.getElementById("login-password");

    const toggleLoginPassword =
        document.getElementById(
            "toggleLoginPassword"
        );


    if (
        toggleLoginPassword &&
        loginPassword
    ) {

        toggleLoginPassword.addEventListener(
            "click",
            function () {

                if (
                    loginPassword.type === "password"
                ) {

                    loginPassword.type = "text";

                    toggleLoginPassword.textContent =
                        "Hide";

                } else {

                    loginPassword.type =
                        "password";

                    toggleLoginPassword.textContent =
                        "Show";

                }

            }
        );

    }


    // =========================
    // Show / Hide Register Password
    // =========================

    const registerPassword =
        document.getElementById("register-password");

    const toggleRegisterPassword =
        document.getElementById(
            "toggleRegisterPassword"
        );


    if (
        toggleRegisterPassword &&
        registerPassword
    ) {

        toggleRegisterPassword.addEventListener(
            "click",
            function () {

                if (
                    registerPassword.type === "password"
                ) {

                    registerPassword.type = "text";

                    toggleRegisterPassword.textContent =
                        "Hide";

                } else {

                    registerPassword.type =
                        "password";

                    toggleRegisterPassword.textContent =
                        "Show";

                }

            }
        );

    }


    // =========================
    // Show / Hide Confirm Password
    // =========================

    const confirmPassword =
        document.getElementById("confirm-password");

    const toggleConfirmPassword =
        document.getElementById(
            "toggleConfirmPassword"
        );


    if (
        toggleConfirmPassword &&
        confirmPassword
    ) {

        toggleConfirmPassword.addEventListener(
            "click",
            function () {

                if (
                    confirmPassword.type === "password"
                ) {

                    confirmPassword.type = "text";

                    toggleConfirmPassword.textContent =
                        "Hide";

                } else {

                    confirmPassword.type =
                        "password";

                    toggleConfirmPassword.textContent =
                        "Show";

                }

            }
        );

    }

});