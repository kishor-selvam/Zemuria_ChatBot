import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        At YourAppName, we are dedicated to delivering cutting-edge AI-powered chat solutions
        designed to simplify communication and enhance user experience. Our mission is to
        empower individuals and organizations with intuitive, reliable tools that streamline
        interaction and provide meaningful assistance.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          To be the leading platform in AI-driven conversational technology, setting new standards
          for innovation, accessibility, and user-centric design.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Innovation:</strong> Continuously pushing boundaries to bring you the best tech.</li>
          <li><strong>Integrity:</strong> Transparency and honesty in everything we do.</li>
          <li><strong>User Focus:</strong> Designing with empathy to meet your needs.</li>
          <li><strong>Collaboration:</strong> Working together to create meaningful solutions.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
