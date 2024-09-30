import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Body">
      <div className="blogTitle">
        <h1>Blog title goes here </h1>
        <div className="subTitle">
          <div className="left">
            Company Name
          </div>
          <div className="right">
            Job Position
          </div>
        </div>
      </div>
      <div className="bodyContent">
        <div className="mainContent">
          <p>This is content about the blog title. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <div className="mediaContent">
            <img src="./temp.jpeg"/>
          </div>
          <div className="contentBottom">
            <div className="leftCB">
              upload file button will go here if poster<br/>
              otherwise like and dislike btn
            </div>
            <div className="rightCB">
              <div className="assessmentType"> 
              Assessment Type/Tag goes here, Author goes here <br/>
              Created on date, last edited date
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
