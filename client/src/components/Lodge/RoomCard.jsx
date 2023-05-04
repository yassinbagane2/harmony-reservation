import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ image, price, name, id }) => {
  return (
    <Link
      to={`rooms/${id}`}
      className="relative w-80 h-[400px] bg-white text-white shadow-md rounded-md overflow-hidden cursor-pointer group"
    >
      <img
        className="h-full w-full object-cover group-hover:scale-105 duration-200"
        src={image}
        alt="room"
      />
      <div className="absolute top-3 right-4 px-2 py-1 bg-[rgba(0,0,0,.3)] rounded-md ">
        {price} / night
      </div>
      <div>
        <h3 className="absolute bottom-5 left-3 font-bold text-xl">{name}</h3>
      </div>
    </Link>
  );
};

export default RoomCard;
