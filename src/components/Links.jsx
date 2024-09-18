const Links = () => {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-5 center">Central Government Online Assesment Portal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="/services" className="bg-orange-400 text-white p-5 rounded-lg text-center  hover:bg-green-800  hover:text-white">Previous year questions</a>
          <a href="/departments" className="bg-orange-400 text-white p-5 rounded-lg text-center  hover:bg-green-800  hover:text-white">Additional Links</a>
          <a href="/forms" className="bg-orange-400 text-white p-5 rounded-lg text-center  hover:bg-green-800  hover:text-white">Help Desk</a>
          <a href="/tax" className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800  hover:text-white">Recent Notices</a>
          <a href="/policies" className="bg-orange-400 text-white p-5 rounded-lg text-center hover:bg-green-800 hover:text-white">Events</a>
          <a href="/health" className="bg-orange-400 text-white p-5 rounded-lg text-center  hover:bg-green-800 hover:text-white">Form-Filup</a>
        </div>
      </div>
    );
  };
  
  export default Links;
  