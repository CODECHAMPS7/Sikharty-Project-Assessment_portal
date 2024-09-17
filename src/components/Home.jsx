import Navbar from "./Navbar";
import Banner from "./Banner";  // Create Banner component
import Announcements from "./Announcements";  // Create Announcements component
import Links from "./Links";  // Create Links component
import Footer from "./Footer";  // Create Footer component

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero/Banner Section */}
      <Banner />

      {/* Announcements Section */}
      <Announcements />

      {/* Important Links Section */}
      <Links />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
