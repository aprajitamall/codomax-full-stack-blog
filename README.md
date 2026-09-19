# BlogSphere - Full Stack Blog Application

BlogSphere is a full-stack blog application developed as part of the **Codomax Digital Solutions Full Stack Web Development Internship**.

The application allows users to explore blog posts, search and filter blogs, create an account, log in securely, create and manage their own blogs, and view their personalized dashboard.

The project uses a frontend built with **HTML, CSS and JavaScript** and a backend built with **Node.js, Express.js and MongoDB**.

---

## Features

### Frontend

* Responsive and modern user interface
* Home page
* Blog listing page
* Blog search functionality
* Category filtering
* Blog details page
* User registration
* User login
* Create Blog page
* Live blog preview
* Character counter for blog content
* Form validation
* Password show/hide functionality
* Responsive mobile navigation
* User dashboard
* Dark Mode
* Persistent Dark Mode preference

### Backend

* Node.js backend
* Express.js REST API
* MongoDB database integration
* User registration and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Blog ownership
* Create, Read, Update and Delete operations
* User-specific blog retrieval
* Search and category filtering
* Authentication middleware

---

## Pages

### Home

Introduces BlogSphere and provides quick access to blogs, registration, login and blog creation.

### Blogs

Displays available blog posts with:

* Search
* Category filtering
* Blog cards
* Author information
* Read More functionality

### Blog Details

Displays detailed information about a selected blog post using its MongoDB ObjectId.

### Register

Allows users to create an account using:

* Name
* Email
* Password
* Confirm Password

### Login

Allows registered users to log in using their email and password.

Successful login generates a JWT token that is used for authenticated operations.

### Dashboard

Provides a personalized dashboard where users can:

* View their name and email
* View total blogs
* View published blogs
* View draft statistics
* View their own blogs
* Delete their blogs
* Access individual blog details

### Create Blog

Allows authenticated users to create a blog using:

* Blog title
* Category
* Blog content
* Live preview
* Character counter
* Form validation

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Live Server
* Nodemon

---

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
├── js/
│   └── script.js
│
└── backend/
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    │
    ├── config/
    │   └── db.js
    │
    ├── middleware/
    │   └── authMiddleware.js
    │
    ├── models/
    │   ├── User.js
    │   └── Blog.js
    │
    └── routes/
        ├── authRoutes.js
        └── blogRoutes.js
```

---

# API Endpoints

## Authentication

### Register

```text
POST /api/auth/register
```

Creates a new user account.

### Login

```text
POST /api/auth/login
```

Authenticates a user and returns a JWT token.

---

## Blogs

### Get All Blogs

```text
GET /api/blogs
```

Retrieves all available blogs.

### Get Single Blog

```text
GET /api/blogs/:id
```

Retrieves a specific blog using its MongoDB ObjectId.

### Create Blog

```text
POST /api/blogs
```

Creates a new blog for an authenticated user.

Requires:

```text
Authorization: Bearer <token>
```

### Update Blog

```text
PUT /api/blogs/:id
```

Updates a blog owned by the authenticated user.

### Delete Blog

```text
DELETE /api/blogs/:id
```

Deletes a blog owned by the authenticated user.

### Get My Blogs

```text
GET /api/blogs/my
```

Retrieves blogs belonging to the currently authenticated user.

---

# Authentication

BlogSphere uses **JWT-based authentication** to protect private operations.

The authentication flow is:

```text
User Login
    ↓
Backend verifies credentials
    ↓
JWT token generated
    ↓
Token stored in frontend
    ↓
Token sent with protected requests
    ↓
Authentication middleware verifies token
    ↓
Protected operation allowed
```

Protected operations include:

* Creating blogs
* Updating blogs
* Deleting blogs
* Viewing user-specific blogs
* Dashboard access

---

# Database

BlogSphere uses **MongoDB** for storing application data.

The main collections are:

### Users

Stores registered user information.

### Blogs

Stores blog information including:

* Title
* Category
* Content
* Author
* User ownership
* MongoDB ObjectId

Mongoose is used to define schemas and interact with MongoDB.

---

# Environment Variables

The backend uses environment variables for sensitive configuration.

Create a `.env` file inside the `backend` folder:

```text
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Do not commit the `.env` file to GitHub.

---

# Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/aprajitamall/codomax-full-stack-blog.git
```

Navigate into the project:

```bash
cd codomax-full-stack-blog
```

---

## 2. Install Backend Dependencies

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## 3. Configure Environment Variables

Create:

```text
backend/.env
```

Add the required MongoDB URI and JWT secret.

---

## 4. Start the Backend

Run:

```bash
npm run dev
```

The backend runs on:

```text
https://blogsphere-backend-spor.onrender.com
```

---

## 5. Start the Frontend

Open the project in Visual Studio Code and run the frontend using **Live Server**.

The frontend can then be accessed through the Live Server URL.

---

# Module Development Progress

## Module 3 - Database Integration

### Day 12 - Final Testing

* Tested MongoDB blog storage and retrieval.
* Tested individual blog details using MongoDB ObjectId.
* Tested invalid blog ID handling.
* Verified blogs persist after backend restart.
* Verified MongoDB collections for users and blogs.
* Completed Module 3 database integration.

---

# Module 4 - CRUD Operations

### Day 13 - Update Blog API

* Implemented blog update functionality.
* Added MongoDB-based blog update API.

### Day 14 - Delete Blog API

* Implemented blog deletion functionality.
* Added MongoDB-based blog deletion API.

### Day 15 - Search and Category Filtering

* Added blog search by title and content.
* Added category-based filtering.
* Tested combined search and category filtering.

### Day 16 - Final CRUD Testing

* Tested Create, Read, Update and Delete operations.
* Tested individual blog retrieval using MongoDB ObjectId.
* Verified CRUD APIs with MongoDB persistence.
* Completed Module 4 testing and documentation.

---

# Module 5 - Authentication & Dashboard

### Day 17 - JWT Authentication

* Implemented JWT-based user authentication.
* Added JWT secret configuration using environment variables.
* Updated login API to generate and return JWT tokens.
* Stored authenticated user information in the frontend.
* Tested successful user login and token generation.

### Day 18 - Protected Routes

* Created JWT authentication middleware.
* Protected blog creation, update and delete routes.
* Added Bearer token authentication for private API requests.
* Prevented unauthenticated users from creating or modifying blogs.
* Added frontend authentication handling for protected actions.
* Tested protected routes with and without valid authentication tokens.

### Day 19 - User Dashboard & Blog Ownership

* Added user-specific blog ownership using MongoDB user references.
* Updated the Blog model to store the authenticated user's ID.
* Added protected `/api/blogs/my` route.
* Updated the dashboard to display the logged-in user's name and email.
* Added total blogs, published blogs and draft statistics.
* Added delete functionality for the user's own blogs.
* Prevented users from updating or deleting blogs they do not own.
* Added logout functionality using localStorage session cleanup.

### Day 20 - Final Testing & Documentation

* Tested JWT login and authentication.
* Tested dashboard access protection.
* Tested user-specific blog retrieval.
* Tested blog creation with authenticated users.
* Tested blog deletion and ownership protection.
* Tested logout and session cleanup.
* Verified frontend and backend integration.
* Updated project documentation.
* Completed Module 5 Authentication & Dashboard.

---

# Module 6 - Final Project & Deployment

### Day 21 - UI Improvements, Dark Mode & Responsiveness

* Improved the overall BlogSphere user interface.
* Added Dark Mode functionality.
* Added a Dark Mode toggle button across the application.
* Added persistent theme preference using localStorage.
* Improved dark-mode styling for pages, cards, forms and navigation.
* Improved responsive behavior for different screen sizes.
* Verified mobile navigation.
* Tested Dark Mode across all major pages.

### Day 22 - Professional README

* Improved project documentation.
* Added complete project overview.
* Documented application features and pages.
* Added project structure.
* Documented technologies used.
* Added API endpoint documentation.
* Added authentication and database documentation.
* Added local setup instructions.
* Documented environment variables.
* Added internship module progress.

### Day 23 - Deployment

* Prepared the frontend and backend for deployment.
* Configured production environment variables.
* Deployed the application using a suitable hosting platform.
* Tested the deployed frontend and backend integration.

### Day 24 - Final Testing & Submission

* Performed final application testing.
* Verified authentication functionality.
* Verified CRUD operations.
* Verified dashboard functionality.
* Verified Dark Mode.
* Verified responsive design.
* Verified frontend and backend integration.
* Verified the deployed application.
* Prepared final internship submission.

---

# Future Improvements

Possible future enhancements include:

* Blog editing interface
* Draft and published blog status
* User profile management
* Blog likes and comments
* Image upload for blog posts
* Rich text editor
* Pagination
* Advanced search
* Admin dashboard
* Social sharing functionality

---

# Internship

This project was developed as part of the:

**Codomax Digital Solutions - Full Stack Web Development Internship**

The project demonstrates practical implementation of frontend development, backend APIs, database integration, authentication, CRUD operations, responsive UI design and deployment.

---

# GitHub Repository

Repository:

https://github.com/aprajitamall/codomax-full-stack-blog
