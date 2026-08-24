

document.addEventListener("DOMContentLoaded", function () {

    console.log("BlogSphere application loaded successfully.");


    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            alert("Login form submitted successfully!");

        });
    }


    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;
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


            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }


            alert("Registration form submitted successfully!");

        });
    }


    const createBlogForm =
        document.getElementById("createBlogForm");

    if (createBlogForm) {

        createBlogForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const title =
                document.getElementById("blog-title").value;

            const category =
                document.getElementById("blog-category").value;

            const content =
                document.getElementById("blog-content").value;


            if (
                title === "" ||
                category === "" ||
                content === ""
            ) {
                alert("Please complete all blog fields.");
                return;
            }


            alert("Blog submitted successfully!");

        });
    }
    // =========================
    // Blog Search & Category Filter
    // =========================

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const blogCards = document.querySelectorAll(".searchable-blog");


   function filterBlogs() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedCategory = categoryFilter.value
        .trim()
        .toLowerCase();

    blogCards.forEach(function (blog) {

        const blogText = blog.textContent.toLowerCase();

        const categoryElement =
            blog.querySelector(".category");

        const blogCategory =
            categoryElement.textContent
                .trim()
                .toLowerCase();


        const matchesSearch =
            blogText.includes(searchText);


        let matchesCategory = true;

        if (selectedCategory !== "all") {

            matchesCategory =
                blogCategory.includes(selectedCategory);

        }


        if (matchesSearch && matchesCategory) {

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

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }
});