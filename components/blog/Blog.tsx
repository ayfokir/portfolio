import React from "react";

const blogs = [
  {
    id: 1,
    category: "REACT",
    title: "Latest React updates in React 19 version",
    date: "May 10, 2024",
    comments: "No Comments",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 2,
    category: "NEXT.JS",
    title: "Latest Next.js Version 15",
    date: "May 10, 2024",
    comments: "No Comments",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 3,
    category: "DOCKER",
    title: "About Docker",
    date: "May 10, 2024",
    comments: "No Comments",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
];

const BlogCard = ({ blog }: any) => {
  return (
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <span className="inline-block bg-purple-700 text-white text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded">
          {blog.category}
        </span>
        <h3 className="text-lg font-bold text-white mt-3 mb-2 leading-snug">
          {blog.title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm space-x-4">
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h8M8 11h4m-6 4h6m6-5a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{blog.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h8m-8 4h6m2-11.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM3 12h.01M21 12h.01M12 21.5l1.25-4.35a4.5 4.5 0 00-4.5-4.5H3.75"
              />
            </svg>
            <span>{blog.comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

interface PropsTypes {
  id: string
}

const Blog = ({id}:PropsTypes) => {
  return (
    <section className="bg-[#0f0f1f] py-12 md:px-24 sm:px-16 px-8" id={`${id}`}>
      <div className="">
        <h2 className=" text-3xl font-bold text-purple-300 mb-4">
          Recent Blogs
        </h2>
        <p className=" text-gray-400 max-w-2xl mb-10">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
