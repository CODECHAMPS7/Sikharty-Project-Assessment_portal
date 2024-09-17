const Links = () => {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-5">Important Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="/services" className="bg-gray-200 p-5 rounded-lg text-center">Government Services</a>
          <a href="/departments" className="bg-gray-200 p-5 rounded-lg text-center">Departments</a>
          <a href="/forms" className="bg-gray-200 p-5 rounded-lg text-center">Download Forms</a>
          <a href="/tax" className="bg-gray-200 p-5 rounded-lg text-center">Tax Information</a>
          <a href="/policies" className="bg-gray-200 p-5 rounded-lg text-center">Policies</a>
          <a href="/health" className="bg-gray-200 p-5 rounded-lg text-center">Health Services</a>
        </div>
      </div>
    );
  };
  
  export default Links;
  