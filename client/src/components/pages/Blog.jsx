import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "May 20, 2025",
      summary:
        "A beginner's guide to React Hooks and how they simplify your components.",
      url: "#",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      date: "May 15, 2025",
      summary:
        "Learn how Tailwind CSS can speed up your styling workflow with utility-first classes.",
      url: "#",
    },
    {
      id: 3,
      title: "JavaScript ES2025 Features",
      date: "May 10, 2025",
      summary:
        "Explore the latest JavaScript features coming in ES2025 and how to use them.",
      url: "#",
    },
    {
      id: 4,
      title: "Building REST APIs with Node.js",
      date: "May 5, 2025",
      summary:
        "Step-by-step guide to creating scalable REST APIs using Node.js and Express.",
      url: "#",
    },
    {
      id: 5,
      title: "MySQL Optimization Tips",
      date: "May 1, 2025",
      summary:
        "Optimize your MySQL queries and database schema for better performance.",
      url: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map(({ id, title, date, summary, url }) => (
          <article key={id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <p className="text-gray-700">{summary}</p>
            <a
              href={url}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
