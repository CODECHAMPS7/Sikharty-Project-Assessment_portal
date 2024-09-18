const Footer = () => {
  return (
    <div>
      <footer className="bg-[#e2e8f0] text-black py-4 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex items-center text-center mb-4 md:mb-0">
            <span className="ml-4 text-lg font-semibold">
              &copy; Government of India
            </span>
          </div>
          <div className="text-center">
            <p>Toll-Free Contact Number: 1800 000 0000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
