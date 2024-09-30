import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [blogs, setBlog] = useState([]);
  const [blogDetails, setBlogDetails] = useState({
    title: '',
    companyName: '',
    jobTitle: '',
    content: '',
    assessmentType: '',
    author:''
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  // Fetch all books from the backend
  const fetchBlog = async () => {
    try {
      const response = await axios.get('http://localhost:5555/api/blogs');
      console.log("all okay");
      console.log(response.data.data[0]);
      setBlog(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5555/api/blogs', JSON.stringify(blogDetails));
      setBlog([...blogs, response.data]); // Update the state with the new book
      setBlogDetails({ title: '',
        companyName: '',
        jobTitle: '',
        content: '',
        assessmentType: '',
        author: ''}); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Body">
      <div className="formWrapper">
          <form onSubmit={addBlog}>
            <input
              type="text"
              placeholder="Title"
              value={blogDetails.title}
              onChange={(e) => setBlogDetails({ ...blogDetails, title: e.target.value })}
              required
              className="titleInput"
            />
            <input
              type="text"
              placeholder="Company name"
              value={blogDetails.companyName}
              onChange={(e) => setBlogDetails({ ...blogDetails, companyName: e.target.value })}
              required
              className="titleInput"
            />
            <input
              type="text"
              placeholder="Job Title"
              value={blogDetails.jobTitle}
              onChange={(e) => setBlogDetails({ ...blogDetails, jobTitle: e.target.value })}
              required
              className="titleInput"
            />
            <input
              type="text"
              placeholder="Content"
              value={blogDetails.content}
              onChange={(e) => setBlogDetails({ ...blogDetails, content: e.target.value })}
              required
              className="titleInput"
            />
            <input
              type="text"
              placeholder="assessmentType"
              value={blogDetails.assessmentType}
              onChange={(e) => setBlogDetails({ ...blogDetails, assessmentType: e.target.value })}
              required
              className="titleInput"
            />
            <input
              type="text"
              placeholder="Author"
              value={blogDetails.author}
              onChange={(e) => setBlogDetails({ ...blogDetails, author: e.target.value })}
              required
              className="titleInput"
            />
            <button type="submit" className="submitBtn">Add Blog</button>
          </form>
        </div>

      {blogs.map((blog) => ( <div className="wrapperForTemp">
        <div className="blogTitle">
          <h1>{blog.title} </h1>
          <div className="subTitle">
            <div className="left">
              {blog.companyName}
            </div>
            <div className="right">
              {blog.jobTitle}
            </div>
          </div>
        </div>
        <div className="bodyContent">
          <div className="mainContent">
            <p>{blog.content}</p>
            <div className="mediaContent">
            File upload result here
              <img src="./temp.jpeg"/>
            </div>
            <div className="contentBottom">
              <div className="leftCB">
                upload file button will go here if poster<br/>
                <button>Like</button> <button>Dislike</button>
              </div>
              <div className="rightCB">
                <div className="assessmentType"> 
                {blog.assessmentType}, {blog.author} <br/>
                {blog.blogCreatedAt}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="commentAndUsers">
          <div className="CAUWrapper">
            <div className="commentSection">
              <div className="comment">
                <div className="commentContent">
                 <p>Comment content Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div className="commentInfo">
                  <div className="CILeft">
                    author
                  </div>
                  <div className="CIRight">
                    date posted/edited
                  </div>
                </div>
              </div>
            </div>
            <div className="similarUsers">
              <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
