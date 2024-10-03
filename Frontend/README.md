# Online Assessment Insights Platform

An engaging platform for sharing and discovering tips, strategies, and experiences related to online assessments. Connect with peers, share your own experiences, and find study partners to enhance your preparation.



## Features

Home Page: Introduction to the platform with options to get started or learn more.

Blog Page: Browse a compilation of posts shared by users detailing their experiences and tips.

Create Blog Post: Share your own experiences by creating a new blog post.



## Getting Started

Follow these instructions to get a copy of the project up and running on local machine.

### Prerequisites

Node.js (version 14 or higher)

npm (version 6 or higher)

### Installation and Setup

1. Clone the Repository

```    python
  git clone https://github.com/.........git
  cd Frontend
```

### Install Dependencies

2. Run the setup script to install all necessary dependencies:

```   npm run setup ```

### Configure Environment

Open the file src/config.js. By default, activeEnv is set to 'remote' to use the deployed backend API.

If you wish to use a local backend server, change activeEnv to 'local':

```     bash
 src/config.js
 const activeEnv = 'local'; // Set to 'remote' for deployment, 'local' for local testing
```

### Finanlly Running the Application

Start the development server:

``` npm run dev```







## Reminder Commands

For reference, here are the commands used during the initial setup of the project:

``` bash
npm install
npm install react-router-dom
npm install @headlessui/react
npm install @heroicons/react

# Tailwind CSS Setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @tailwindcss/forms
```
