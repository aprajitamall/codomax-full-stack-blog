# BlogSphere - Blog Application

BlogSphere is a responsive frontend blog application developed as part of the Codomax Digital Solutions Full Stack Web Development Internship.

The application provides a clean interface where users can explore blogs, create an account, log in, and create and preview blog posts.

## Features

- Responsive and modern user interface
- Home page
- Blog listing page
- Blog search functionality
- Category filtering
- Blog details page
- User registration page
- User login page
- Create Blog page
- Live blog preview
- Character counter for blog content
- Form validation
- Password show/hide functionality
- Responsive mobile navigation
- Dashboard interface

## Pages

### Home

Introduces BlogSphere and provides quick access to blogs, registration, and login.

### Blogs

Displays available blog posts with:

- Search
- Category filtering
- Blog cards
- Read More functionality

### Blog Details

Displays detailed information about a selected blog post.

### Register

Allows users to create an account with:

- Name
- Email
- Password
- Confirm Password

### Login

Allows users to enter their registered email and password.

### Dashboard

Provides the user with a dashboard interface for managing blogs.

### Create Blog

Allows users to create a blog with:

- Blog title
- Category
- Blog content
- Live preview
- Character counter
- Form validation

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Project Structure

```text
blog-application/
│
├── index.html
├── blogs.html
├── blog-details.html
├── login.html
├── register.html
├── dashboard.html
├── create-blog.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
    ## Module 3 – Database Integration

### Day 12 – Final Testing

- Tested MongoDB blog storage and retrieval.
- Tested individual blog details using MongoDB ObjectId.
- Tested invalid blog ID handling.
- Verified blogs persist after backend restart.
- Verified MongoDB collections for users and blogs.
- Completed Module 3 database integration.

## Module 4 – CRUD Operations

### Day 16 – Final CRUD Testing

- Implemented Create, Read, Update and Delete operations for blogs.
- Added MongoDB-based blog update functionality.
- Added MongoDB-based blog deletion functionality.
- Added blog search by title and content.
- Added category-based blog filtering.
- Tested combined search and category filtering.
- Tested individual blog retrieval using MongoDB ObjectId.
- Verified CRUD APIs with MongoDB persistence.
- Completed Module 4 testing and documentation.
## Module 5 – Authentication & Dashboard

### Day 17 – JWT Authentication

- Implemented JWT-based user authentication.
- Added JWT secret configuration using environment variables.
- Updated login API to generate and return JWT tokens.
- Stored authenticated user information securely in the frontend.
- Tested successful user login and token generation.

### Day 18 – Protected Routes

- Created JWT authentication middleware.
- Protected blog creation, update and delete routes.
- Added Bearer token authentication for private API requests.
- Prevented unauthenticated users from creating or modifying blogs.
- Added frontend authentication handling for protected actions.
- Tested protected routes with and without valid authentication tokens.

### Day 19 – User Dashboard & Blog Ownership

- Added user-specific blog ownership using MongoDB user references.
- Updated the Blog model to store the authenticated user's ID.
- Added protected `/api/blogs/my` route to retrieve the logged-in user's blogs.
- Updated the dashboard to display the logged-in user's name and email.
- Added total blogs, published blogs and draft statistics.
- Added delete functionality for the user's own blogs.
- Prevented users from updating or deleting blogs they do not own.
- Added logout functionality using localStorage session cleanup.

### Day 20 – Final Testing & Documentation

- Tested JWT login and authentication.
- Tested dashboard access protection.
- Tested user-specific blog retrieval.
- Tested blog creation with authenticated users.
- Tested blog deletion and ownership protection.
- Tested logout and session cleanup.
- Verified frontend and backend integration.
- Updated project documentation.
- Completed Module 5 Authentication & Dashboard.