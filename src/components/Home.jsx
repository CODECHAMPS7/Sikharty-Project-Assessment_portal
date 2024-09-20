import Navbar from "./Navbar";
import Announcement from "../Pages/Announcment";  // Announcements now includes Banner, Links, and Footer

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Announcements Section (which includes Banner, Links, and Footer) */}
      <Announcement />
    </div>
  );
};

export default Home;
