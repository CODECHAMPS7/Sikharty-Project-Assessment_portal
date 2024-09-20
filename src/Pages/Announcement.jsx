import Banner from "./Banner";
import { useState } from "react";

const Announcement = () => {
  const [currentContent, setCurrentContent] = useState('');

  return (
    <div className="p-10">
      {/* Banner Section */}
      <Banner />

      {/* Announcements Section */}
      <h2 className="text-3xl font-semibold mb-5">Latest Announcements</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>Government introduces new tax reform policies.</li>
        <li>COVID-19 vaccination drive for all citizens.</li>
        <li>Upcoming examinations scheduled for next month.</li>
      </ul>

      {/* Links Section */}
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-5 text-center">Central Government Online Assessment Portal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <button
            onClick={() => setCurrentContent('Previous Year Questions')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Previous Year Questions
          </button>
          <button
            onClick={() => setCurrentContent('Additional Links')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Additional Links
          </button>
          <button
            onClick={() => setCurrentContent('Help Desk')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Help Desk
          </button>
          <button
            onClick={() => setCurrentContent('Recent Notices')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Recent Notices
          </button>
          <button
            onClick={() => setCurrentContent('Events')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Events
          </button>
          <button
            onClick={() => setCurrentContent('Form Fillup')}
            className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white"
          >
            Form Fillup
          </button>
        </div>

        {/* Conditionally display selected content */}
        <div className="mt-10 p-5 bg-gray-100 rounded-lg">
          {currentContent ? (
            <h3>{currentContent}</h3>
          ) : (
            <h3>Select a category to display information</h3>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left side content */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p>&copy; 2024 Central Government Portal. All Rights Reserved.</p>
            <p>Toll-Free Contact Number: 1800 000 0000</p>
          </div>

          {/* Right side content */}
          <div className="text-center md:text-right">
            <a href="/privacy" className="text-blue-300">Privacy Policy</a> 
            <span className="mx-2">|</span>
            <a href="/contact" className="text-blue-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Announcement;
