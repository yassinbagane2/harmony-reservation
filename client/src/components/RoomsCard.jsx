import React from "react";
import room1 from "../assets/room1.jpg";
import { Link } from "react-router-dom";

const RoomsCard = ({
  id,
  title,
  location,
  hotel,
  description,
  image,
  geusts,
  price,
}) => {
  return (
    <div className="flex gap-4 border border-gray-100 rounded-md w-[1300px] h-72 overflow-hidden">
      <img
        className="w-96 object-cover"
        src={`http://localhost:8000/${image}`}
        alt="room"
      />
      <div className="py-6 w-[60%]">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-500 mt-2 mb-6">{description}</p>
        <ul className="list-disc ml-8">
          <li>WiFi</li>
          <li>Air Conditioner</li>
          <li>Towles</li>
        </ul>
      </div>
      <div className="w-96 border-l flex flex-col gap-6 items-center justify-center">
        <p className="text-xl text-gray-800 font-medium">
          {price}DT / per night
        </p>
        <button>
          <Link
            to={`${id}`}
            className="border border-gray-200 rounded-lg font-bold text-gray-800 px-3 py-2 cursor-pointer"
          >
            More details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RoomsCard;
