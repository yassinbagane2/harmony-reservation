import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="pt-6 px-4 mt-3 bg-gray-100">
      <div className="max-w-[80%] mx-auto items-center flex justify-between">
        <div className="text-gray-500 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-black uppercase">Harmony.</h1>
          <address className="font-medium">
            <span className="font-bold">Address: </span>Street 98, Tunisia
          </address>
          <p>
            <span className="font-bold">Phone:</span> +216 52 544 318
          </p>
          <p>
            <span className="font-bold">Email:</span> email@harmony.com
          </p>
          <div className="flex gap-2 text-lg text-gray-800">
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
              <BsFacebook className="cursor-pointer duration-150 hover:scale-105" />
            </div>
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
              <BsInstagram className="cursor-pointer duration-150 hover:scale-105" />
            </div>
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
              <BsTwitter className="cursor-pointer duration-150 hover:scale-105" />
            </div>
          </div>
        </div>
        <div className="text-gray-500 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Useful Links.</h1>
          <Link className="hover:underline " to="/location">
            Location
          </Link>
          <Link className="hover:underline " to="/restaurant">
            Our restaurant
          </Link>
          <Link className="hover:underline " to="/staff">
            Our staff
          </Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Support.</h1>
          <Link className="hover:underline " to="/help">
            Help center
          </Link>
          <Link className="hover:underline " to="/contact">
            Contact Us
          </Link>
          <Link className="hover:underline " to="/terms">
            Terms & condtions
          </Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Latest news.</h1>
          <Link className="hover:underline " to="/help">
            Amazing beach news
          </Link>
          <Link className="hover:underline " to="/contact">
            Sightseeing
          </Link>
          <Link className="hover:underline " to="/terms">
            Breakfast Time
          </Link>
        </div>
      </div>
      <div className="border-t border-t-gray-200 flex items-center justify-between text-custom-gray mt-4 p-2">
        <p>&copy; All rights reserved 2023</p>
        <p className="text-lg cursor-pointer">
          About US / Contact Us / Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
