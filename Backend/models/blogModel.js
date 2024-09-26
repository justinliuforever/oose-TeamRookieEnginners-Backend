import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title of the blog (e.g., OA title, job role)
    },
    companyName: {
      type: String,
      required: true, // The company that the OA is for
    },
    jobTitle: {
      type: String,
      required: true, // The job title for the OA
    },
    content: {
      type: String,
      required: true, // The main content of the blog (OA experience, tips, etc.)
    },
    assessmentType: {
      type: String,
      required: true, // The type of assessment (coding, behavioral, etc.)
    },
    fileURL: {
      type: String,
      required: false, // Optional URL to attached resources (e.g., PDFs, images)
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the user who authored the blog
      required: true,
    },
    usersPreparing: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to users preparing for the same OA
      },
    ],
    comments: [
      {
        commentText: {
          type: String,
          required: true, // The text content of the comment
        },
        commentAuthor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the user who posted the comment
          required: true,
        },
        commentCreatedAt: {
          type: Date,
          default: Date.now, // Date when the comment was posted
        },
      },
    ],
    likes: {
      type: Number,
      default: 0, // Track the number of likes the blog post has
    },
    lastEditedByUserAt: {
      type: Date,
      required: false, // Tracks the last time the blog was edited by a user
    },
  },
  {
    timestamps: { createdAt: 'blogCreatedAt', updatedAt: true }, // Automatically adds blogCreatedAt and updatedAt fields
  }
);

export const Blog = mongoose.model('Blog', blogSchema);
