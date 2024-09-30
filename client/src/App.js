import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [blog, setBlog] = useState([]);
  const [blogDetails, setBlogDetails] = useState({
    title: '',
    companyName: '',
    jobTitle: '',
    content: '',
    assessmentType: '',
    author: '',
    fileURL: '',
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
      setBlog(response.data.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Body">
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
              Created on date/last edited date
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
  );
}

export default App;
