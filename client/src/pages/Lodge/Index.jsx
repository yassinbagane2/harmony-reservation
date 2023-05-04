import { Link } from "react-router-dom";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import About from "../../components/Lodge/About";
import RoomCard from "../../components/Lodge/RoomCard";
import BestPlaces from "../../components/Lodge/BestPlaces";
import Footer from "../../components/Shared/Footer";
const Lodge = () => {
  return (
    <>
      <div className="bg-[url('./images/background.jpg')] bg-center bg-cover min-h-screen opacity-80 flex items-center flex-col justify-center">
        <h1 className="text-6xl uppercase text-white tracking-widest font-Castoro">
          Harmony
        </h1>
        <div className="text-white text-lg leading-none">Since 2023</div>
      </div>
      <About />
      <div className="bg-gray-100 p-8">
        <div className="max-w-[1300px] mx-auto text-custom-gray font-medium">
          <h2 className="text-3xl  py-2">Our best rooms</h2>
          <div className="flex justify-between items-center">
            <p className="text-sm">
              Our best rooms available for your vacation
            </p>
            <Link className="duration-200 hover:translate-x-1" to={"rooms"}>
              View all rooms
            </Link>
          </div>
          <div className="mt-3 flex gap-5 flex-wrap">
            <RoomCard name="Single Room" price="165DT" image={room1} id="1" />
            <RoomCard name="King Suite" price="200DT" image={room2} />
            <RoomCard name="Double Room" price="180DT" image={room3} />
          </div>
        </div>
      </div>
      <BestPlaces />
      <Footer />
    </>
  );
};

export default Lodge;
