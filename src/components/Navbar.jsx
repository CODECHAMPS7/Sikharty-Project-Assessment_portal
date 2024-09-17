import { Link } from "react-router-dom";
import Image from '../Assets/image.png';

const Navbar = () => {
  return ( 
    <div className="flex flex-col md:flex-row items-center justify-between p-5 shadow-lg shadow-slate-500  bg-[#e2e8f0] text-black ">
      <div className="mb-4 md:mb-0"><Link to=""><img src={Image} alt="not found"  className=" w-36" /></Link></div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div><Link to ="/dashboard">DashBoard</Link></div>
        <div><Link to="/login">login</Link></div>
        <div><Link to="/signup">Sign up</Link></div>
        <div><Link to="/profile">Profile</Link></div>
        
      </div>
    </div>
  );
};
export default Navbar;
