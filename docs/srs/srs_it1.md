**\*Software Requirement Specification\***

**Problem Statement:** A few sentences to describe the problem you are trying to solve, i.e., justify why this software is needed.

Many students and job seekers want to collaborate while preparing for online assessments (OAs) for job or internship applications, but they face difficulty in finding others who are taking the same OAs at the same time. This lack of connection can make the preparation process more isolated and challenging, as they miss out on opportunities to share strategies, exchange knowledge, and support each other.

Furthermore, job seekers often struggle to find personalized OA discussions and job recommendations that match their specific skills and interests, leading to inefficient use of time and missed opportunities. With the growing number of assessments and competitive job markets, there's a need for a platform that can help users connect, collaborate, and find relevant OAs that are tailored to their qualifications and preferences to practice.

**Potential Clients:** Who are influenced by this problem and would benefit from the proposed solution? (i.e. the potential users)

The primary users impacted by this problem and who would benefit from the solution are job seekers, students, and professionals preparing for interviews or assessments. They can access shared resources and connect with others facing similar challenges. Educational institutions and mentors can use the platform to foster collaboration and improve learning outcomes, making the preparation process more effective for all.

**Proposed Solution:** Write a few sentences that describe how a software solution will solve the problem described above.

The proposed solution is a web application that helps students and job seekers connect with others preparing for the same online assessments (OAs), offering personalized recommendations based on their skills and interests. They can also share and access interview questions and other related resources. 

Users can upload their resumes, allowing the platform to match them with relevant job opportunities and OA discussions. The app will feature a collaboration system where users can find and chat with peers to work together on OAs. Additionally, location-based matching will enable users to connect with nearby individuals preparing for the same OAs. This creates a supportive and personalized environment that enhances the job search and preparation experience.

**Functional Requirements:** List the (functional) requirements that software needs to have in order to solve the problem stated above. List these in role-goal-benefit format. It is useful to try to group the requirements into those that are essential (must have), and those which are non-essential (but nice to have).  
**Must have**
- Post OA Post: As a user wanting to share OA information, I want to be able to post and view other people's past experience, so I need to be able to fill out a form with company job information and my experience.

- User Login System: As a registered user, I want to securely log in to my account so that I can access personalized content and manage my interview preparations. 

- Main Page (Navigation for Companies, Job Titles, Seasons): As a user preparing for interviews, I want to browse and add companies, job titles, and hiring seasons so that I can track and organize my application process effectively. 

- Submission Review System: As a platform administrator, I want to review all user submissions so that I can ensure the accuracy and quality of information shared on the platform. 

- Forum Functionality (Posts, Comments, Private Chat): As a user preparing for interviews, I want to post in the forum and comment on other posts so that I can gain insights from others and share my own experiences. As a user, I want to have a private chat option so that I can discuss interview strategies confidentially with other users. 

- Find Partners Nearby (Map): As a user preparing for interviews, I want to find nearby students also preparing for interviews so that I can form study groups and prepare together efficiently.

**Nice to have**

- Personalized Discussion Suggestions:  As a student seeking internships, I want recommendations for OA discussions related to companies I’m interested in or skills that I have because it allows me to see what kinds of positions are available and what the application process looks like.
- Company Leaderboard Page: As a student seeking internships or job opportunities, I want to share my positive/negative experiences with companies and view a ranking board based on these shared experiences, so that I can make more informed decisions about potential employers and help other students do the same.
 
**Non-functional Requirements:**

User-Friendly: Simple, intuitive interface.
Data Security: Encrypt personal and location data.
Performance: Fast, smooth, and responsive.
Scalability: Handles growth without lag.
Reliability: 99.9% uptime.
Privacy: Compliant with data protection laws.
Maintainability: Easy to update and fix.
Cross-Platform: Works on all devices.

**Software Architecture & Technology Stack:** Will this be a Web/desktop/mobile (all, or some other kind of) application? Would it conform to specific software architecture? What programming languages, frameworks, databases, …, will be used to develop and deploy the software?

It will be a Web application on a Client-Server Architecture. 
- Stack: MERN
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express, file base + MongoDB

**Similar Apps:** List a few similar applications to the one you are developing. Don't be eager to conclude no similar app exists\! There is always something similar to what you are building\! Finding those will help you to better specify your project. ***You must be prepared to explain how your app is different from the existing ones.***  

Leetcode Discuss:
- Similar: Users share interview/OA experiences.
- Different: Our app connects users preparing for the same OA, adds location-based features.
Glassdoor:
- Similar: Shares interview and company insights.
- Different: Focuses on real-time OA collaboration, not just reviews.
Blind:
- Similar: Discussion about interviews and job offers.
- Different: Our app focuses specifically on OAs and connects users locally.
Reddit (interview subreddits):
- Similar: Interview experience sharing.
- Different: Tailored for OAs, personalized suggestions, and user matching by location.
