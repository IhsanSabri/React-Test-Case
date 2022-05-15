import React from "react";

const Post = ({ posts, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="w-auto text-gray-900 bg-slate-200 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {posts.map((post) => (
        <li
          key={post.id}
          className="w-full px-4 py-2 border-b rounded-t-lg dark:border-gray-600" 
        >
          <h2 className="font-bold">{post.title}</h2>
          <div className="font-light">{post.body}</div>
        </li>
      ))}
    </ul>
  );
};

export default Post;
