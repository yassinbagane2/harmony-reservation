import React from "react";
import HotelCard from "../../components/HotelCard";

const Hotels = () => {
  return (
    <>
      <div className="border-b border-gray-200">
        <h1 className="text-4xl font-medium text-custom-gray py-8">Hotels</h1>
      </div>
      <div className="flex flex-wrap gap-6 mt-4">
        <HotelCard id="1" />
        <HotelCard />
        <HotelCard />
      </div>
    </>
  );
};

export default Hotels;
