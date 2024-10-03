import { useEffect, useState } from 'react';

import NavigationBar from '../components/NavigationBar';
import PostCard from '../components/PostCard';
import config from '../config';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(config.apiUrl);
        const result = await response.json();
        if (result.success) {
          setPosts(result.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="mt-0 bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Online Assessment Insights</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover tips, strategies, and experiences shared by others to help you excel in your online assessments.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
