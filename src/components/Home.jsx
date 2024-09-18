import Navbar from "./Navbar";
import Announcements from "./Announcements";  // Announcements now includes Banner, Links, and Footer

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Announcements Section (which includes Banner, Links, and Footer) */}
      <Announcements />
    </div>
  );
};

export default Home;
