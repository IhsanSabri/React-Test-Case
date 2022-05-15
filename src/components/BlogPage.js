import React, { useState, useEffect } from "react";
import Post from "components/Post";
import Pagination from "components/Pagination";

const BlogPage = () => {
  const pageNumbers = [];
  const [post, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    setPosts(response);
    setIsLoading(false);
  };

  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const changePageNumber = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(post.length / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="m-auto w-6/12">
      <h1 className="text-3xl font-bold m-8 dark:text-white">Blog Page</h1>
      <Post
        className="dark:text-white"
        posts={currentPosts}
        isLoading={isLoading}
      />
      <Pagination
        pageNumbers={pageNumbers}
        changePageNumber={changePageNumber}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogPage;
