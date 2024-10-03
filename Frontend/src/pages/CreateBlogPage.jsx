import NavigationBar from '../components/NavigationBar';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    jobTitle: '',
    content: '',
    assessmentType: '',
    fileURL: '',
    companyLogoURL: '',
    author: '60d0fe4f5311236168a109ca', // Replace 'defaultUserId' after we have a login system
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(config.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Blog post created successfully!');
        navigate('/blog'); // Redirect to the blog page
      } else {
        console.error('Error from server:', result.error); // Log the error from the server
        alert(result.message);
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('An error occurred while creating the blog post.');
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="mt-20"> {/* Add margin-top here */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Create a New Blog Post</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-900">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-900">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-900">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                rows="4"
                value={formData.content}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="assessmentType" className="block text-sm font-medium text-gray-900">
                Assessment Type
              </label>
              <input
                type="text"
                name="assessmentType"
                id="assessmentType"
                value={formData.assessmentType}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="fileURL" className="block text-sm font-medium text-gray-900">
                File URL (optional)
              </label>
              <input
                type="url"
                name="fileURL"
                id="fileURL"
                value={formData.fileURL}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="companyLogoURL" className="block text-sm font-medium text-gray-900">
                Company Logo URL (optional)
              </label>
              <input
                type="url"
                name="companyLogoURL"
                id="companyLogoURL"
                value={formData.companyLogoURL}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
