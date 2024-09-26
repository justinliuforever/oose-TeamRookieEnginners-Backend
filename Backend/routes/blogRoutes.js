import { Blog } from '../models/blogModel.js';
import { User } from '../models/userModel.js';
import express from 'express';

const router = express.Router();

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newBlog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create blog post',
      error: error.message
    });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.status(200).json({
      success: true,
      message: 'Blog posts retrieved successfully',
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog posts',
      error: error.message
    });
  }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username');
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Blog post retrieved successfully',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog post',
      error: error.message
    });
  }
});

// Update a blog post
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedBlog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update blog post',
      error: error.message
    });
  }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog post',
      error: error.message
    });
  }
});

export default router;
