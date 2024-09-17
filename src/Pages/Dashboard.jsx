import image1 from '../Assets/nda.jpeg'
import image2 from '../Assets/ssc.jpg'
import image3 from '../Assets/sbi.jpg'
import image4 from '../Assets/cds.jpg'
import Govlogo from '../Assets/govlogo.jpg'

const Dashboard = () => {

  return (
    <div>

      {/* Hero Section of exam dashboard */}

      <section className="bg-slate-300 py-10">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Exam Dashboard</h1>
          <p className="text-lg text-gray-700">Track your progress and manage your upcoming exams</p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="bg-slate-200 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold">4</h2>
              <p className="text-gray-600">Upcoming Exams</p>
            </div>
            <div className="bg-slate-200 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold">2</h2>
              <p className="text-gray-600">Exams Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exams Section */}
      
      <section className="">
        <div className="container mx-auto ">
          <h2 className="text-2xl font-bold text-center p-6  bg-[#5a87a6] text-white w-full">Upcoming Exams</h2>
          
          <div className="flex flex-wrap justify-center py-8 gap-10 bg-slate-300">

            {/* Card 1 */}

            <div className="bg-slate-100 p-6  w-[300px] rounded-lg shadow-lg">
              <img src={image1} alt="Exam" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">NDA Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
            </div>

             {/* Card 2 */}

            <div className="bg-slate-100 p-6 w-full sm:w-[300px] rounded-lg shadow-lg">
              <img src={image2} alt="Exam" className="w-[280px] h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">SSC Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
            </div>
            
             {/* Card 3 */}

             <div className="bg-slate-100 p-6 w-full sm:w-[300px] rounded-lg shadow-lg">
              <img src={image3} alt="Exam" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">SBI Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
            </div>

            {/* Card 4 */}

            <div className="bg-slate-100 p-6 w-full sm:w-[300px] rounded-lg shadow-lg">
              <img src={image4} alt="Exam" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">CDS Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
            </div>
            
          </div>
        </div>
      </section>


       {/* Appeared Exams Section */}
      
       <section className="">
        <div className="container mx-auto ">
          <h2 className="text-2xl font-bold text-center p-6  bg-[#5a87a6] text-white w-full">Appeared Exams</h2>
          
          <div className="flex flex-wrap justify-center py-8 gap-10 bg-slate-300">

            {/* Card 1 */}

            <div className="bg-slate-100 p-6  w-[300px] rounded-lg shadow-lg">
              <img src={image1} alt="Exam" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">NDA Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <div className='flex gap-4'>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Result
              </button>
              </div>
            </div>

             {/* Card 2 */}

            <div className="bg-slate-100 p-6 w-full sm:w-[300px] rounded-lg shadow-lg">
              <img src={image2} alt="Exam" className="w-[280px] h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">SSC Exam</h3>
              <p className="text-gray-700 font-semibold">Date: 17 Sep 2025</p>
              <p className="text-gray-700 font-semibold">Time: 10:00 AM</p>
              <p className="text-gray-700 font-semibold">Questions: 50</p>
              <div className='flex gap-4'>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Details
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition w-full">
                View Result
              </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>


    {/* Footer section */}

      <footer className='bg-[#e2e8f0] text-black py-4 '>
        <div className='container flex mx-auto items-center justify-between px-4'>
          <div className='flex items-center'>
            <img src={Govlogo} alt="" className="h-11"/>
            <span className="ml-4 text-lg font-semibold">&copy; Government of India </span>
          </div>
          <div>
            <p>Toll Free Contact Number : 0000 0000</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Dashboard;