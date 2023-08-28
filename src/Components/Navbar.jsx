import React from "react";
import logo from '../Assests/lumbini-logo.jpg'
import { Link } from "react-router-dom";

const Navbar=()=>{
return(
    <nav className="bg-white px-4 pt-4 pb-1 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/">
        <img className="h-20 w-50 mr-2" src={logo} alt="Logo" />
        </a>
        
        
      </div>
      <ul className="flex space-x-8 mx-8 ">
        <li>
          <Link className="hover:text-green-700" to="/">Home</Link>
          {/* <Link to="/Path" exact component={yourCompponent} > Contact us </Link>  */}

        </li>
        <li>
          <Link className="hover:text-green-700" to="/about">About Us</Link>
        </li>
        <li>
          <Link className="hover:text-green-700" to="/services">Services</Link>
        </li>
        <li>
          <Link className="hover:text-green-700" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="hover:text-green-700" to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link className="hover:text-green-700" to="/contactus">Contact us</Link>
        </li>
      </ul>
    </nav>
);    

}
export default Navbar;