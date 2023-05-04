import { Link } from "react-router-dom";
import hotelImg from "../assets/hotel.avif";
import { RiStarSFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
const HotelCard = ({ id }) => {
  return (
    <Link
      to={id}
      className="w-80 h-96 border border-gray-100 rounded-md overflow-hidden"
    >
      <img src={hotelImg} alt="hotel" />
      <div className="flex justify-between items-center">
        <h1 className="font-Castoro px-4 mt-2">Hotel california</h1>
        <div className="flex gap-2 px-4">
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
        </div>
      </div>

      <p className="text-gray-500 px-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a
        accusantium, molestiae quisquam at molestias ipsum doloremque quam sunt
        dolor?
      </p>
      <div className="px-4 flex gap-2 items-center">
        <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
          <HiLocationMarker className="text-gray-700" />
        </div>
        <p className="font-Inter">Sousse</p>
      </div>
    </Link>
  );
};

export default HotelCard;
