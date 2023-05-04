import { useState } from "react";
import poolIcon from "../../assets/pool-svg.png";
import teamWork from "../../assets/teamWork.png";
const BestPlaces = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-8">
      <h1 className="text-3xl font-medium text-custom-gray py-2">
        The best places to stay
      </h1>
      <div className="text-xl text-gray-500 mb-3">
        Plenty of services to assure your relaxation and comfortability.
      </div>
      <div className="flex gap-3">
        <img src="./images/restaurant.jpg" alt="restaurant" />
        <div>
          <div className="flex items-center gap-6 bg-gray-50 hover:bg-gray-100 duration-200 p-3 rounded-md cursor-pointer">
            <img className="w-14 " src={poolIcon} alt="pool" />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              veritatis voluptates officia laudantium nobis pariatur.
            </div>
          </div>
          <div className="flex items-center gap-6 bg-gray-50 hover:bg-gray-100 duration-200 p-3 rounded-md my-3 cursor-pointer">
            <img className="w-14 " src={teamWork} alt="restaurant" />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              veritatis voluptates officia laudantium nobis pariatur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPlaces;
