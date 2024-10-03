import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import CreateBlogPage from './pages/CreateBlogPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />

      </Routes>
    </Router>
  );
}

export default App;
