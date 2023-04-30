import React from 'react'
import { BiRestaurant } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Link to={'/'}>
      <div className=" flex items-center gap-2 my-8">
        <BiRestaurant className=" text-3xl text-pink-500" />
        <p className=" text-2xl font-semibold text-gray-500">Foodie</p>
      </div>
    </Link>
  );
}

export default Navbar
