import Links from './Links';       // Import the Links component
import Footer from './Footer';     // Import the Footer component
import Banner from './Banner';     // Import the Banner component

const Announcements = () => {
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
      <Links />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Announcements;
