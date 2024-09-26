# OA Sharing Platform Backend

## Overview

This platform lets users share their Online Assessment (OA) experiences and find others preparing for the same OA. Secretly collaborate with others to improve your chances of success!

## Install

npm init -y

npm i express nodemon

npm install mongodb
npm i cors
npm install dotenv
npm i mongoose

### Terminal

Run: npm run dev

### Postman

**URL**

Remote: https://oose-teamrookieenginners-backend.onrender.com

Local: http://localhost:5555/api/blogs

{
"title": "My Experience with Google's Online Assessment",
"companyName": "Google",
"jobTitle": "Software Engineer Intern",
"content": "I recently took Google's online assessment for their internship program. The assessment consisted of two coding problems and lasted for 90 minutes. The first problem was...",
"assessmentType": "Coding",
"author": "64a1b2c3d4e5f6a7b8c9d0e1",
"fileURL": "https://example.com/my-google-oa-notes.pdf"
}

### Models

#### Blog Model

The `Blog` model represents a blog post in the application. Below are the fields included in the `Blog` model:

- **title**: The title of the blog (e.g., OA title, job role). This field is required.
- **companyName**: The company that the OA is for. This field is required.
- **jobTitle**: The job title for the OA. This field is required.
- **content**: The main content of the blog (OA experience, tips, etc.). This field is required.
- **assessmentType**: The type of assessment (coding, behavioral, etc.). This field is required.
- **fileURL**: Optional URL to attached resources (e.g., PDFs, images).
- **author**: Reference to the user who authored the blog. This field is required.
- **usersPreparing**: Array of references to users preparing for the same OA.
- **comments**: Array of comments on the blog post. Each comment includes:
  - **commentText**: The text content of the comment. This field is required.
  - **commentAuthor**: Reference to the user who posted the comment. This field is required.
  - **commentCreatedAt**: Date when the comment was posted. Defaults to the current date.
- **likes**: Number of likes the blog post has. Defaults to 0.
- **lastEditedByUserAt**: Date when the blog was last edited by a user.
- **timestamps**: Automatically adds `blogCreatedAt` and `updatedAt` fields.

#### User Model

The `User` model represents a user in the application. Below are the fields included in the `User` model:

- **username**: The username of the user. This field is required and must be unique.
- Additional fields can be added as needed.

### Routes

#### Blog Routes

The following routes are available for the `Blog` model:

- **Create a new blog post**: `POST /api/blogs`
- **Get all blog posts**: `GET /api/blogs`
- **Get a single blog post by ID**: `GET /api/blogs/:id`
- **Update a blog post**: `PUT /api/blogs/:id`
- **Delete a blog post**: `DELETE /api/blogs/:id`

The routes are defined in the `blogRoutes.js` file
