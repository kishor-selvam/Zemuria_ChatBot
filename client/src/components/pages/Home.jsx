import React from "react";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto p-10 space-y-12 font-sans">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to Zemuria
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empowering you with seamless AI-powered chat solutions, intuitive
            interfaces, and reliable performance — all tailored to enhance your
            productivity and engagement.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
            onClick={() => alert("Get Started Clicked!")}
          >
            Get Started
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Features at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Real-time Chat History</h3>
              <p className="text-gray-600">
                Review and revisit your conversations anytime with a clean and
                organized chat history interface.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                Plug and play with modern React components, making integration
                into your existing projects hassle-free.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Fully responsive layouts that look great on any device, from
                desktops to mobile phones.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Sign up for updates and tips to maximize your experience with our
            platform.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;
