const Footer = () => {
  return (
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
  );
};

export default Footer;
