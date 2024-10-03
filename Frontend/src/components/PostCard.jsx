import React from 'react';

export default function PostCard({ post }) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src={post.companyLogoURL}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.blogCreatedAt} className="text-gray-500">
            {new Date(post.blogCreatedAt).toLocaleDateString()}
          </time>
          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
            {post.assessmentType}
          </span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.fileURL}>
              <span className="absolute inset-0" />
              {post.companyName}
            </a>
          </h3>
          <p className="mt-5 text-sm font-bold leading-6 text-gray-800">{post.jobTitle}</p>
          <p className="mt-5 italic text-sm leading-6 text-gray-600">{post.content}</p>
        </div>
      </div>
    </article>
  );
}
