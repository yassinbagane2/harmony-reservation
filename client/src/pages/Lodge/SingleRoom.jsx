import { Link } from "react-router-dom";
import roomImage from "../../assets/room.jpg";
import { BsFillPeopleFill, BsCalendarEvent } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaBed } from "react-icons/fa";
import { CgSpaceBetween } from "react-icons/cg";
import { FaHotel } from "react-icons/fa";
import { DatePicker, Select } from "antd";
import "antd/dist/reset.css";

const { RangePicker } = DatePicker;
const SingleRoom = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between max-w-[80%] mx-auto py-6">
          <h1 className="text-4xl font-medium text-custom-gray">Single Room</h1>
          <div className="text-gray-500">
            <span className="font-bold text-black text-xl">165DT</span> / per
            night
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="w-[75%]">
          <div className="flex gap-2 items-center">
            <FaHotel className="text-xl" />
            <Link to={"/hotels/1"} className="text-xl font-medium">
              Hotel name
            </Link>
          </div>
          <img
            className="w-full h-[620px] object-cover mt-2"
            src={roomImage}
            alt="room"
          />
          <div className="flex justify-between mt-3">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                <BsFillPeopleFill className="text-gray-700" />
              </div>
              <div>
                <p>Max geusts</p>
                <p className="font-bold text-gray-800">3 Geusts</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                <BsCalendarEvent className="text-gray-700" />
              </div>
              <div>
                <p>Booking nights</p>
                <p className="font-bold text-gray-800">2 Min</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                <FaBed className="text-gray-700" />
              </div>
              <div>
                <p>Bed type</p>
                <p className="font-bold text-gray-800">Single</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                <CgSpaceBetween className="text-gray-700" />
              </div>
              <div>
                <p>50m²</p>
                <p className="font-bold text-gray-800">Single</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                <HiLocationMarker className="text-gray-700" />
              </div>
              <div>
                <p>Location</p>
                <p className="font-bold text-gray-800">Hammemet</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-500 my-4 pr-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni amet
            enim exercitationem, omnis autem aliquam iure doloribus? Distinctio
            laborum suscipit provident blanditiis at similique perspiciatis
            impedit dolor dolorem magnam est, culpa consequatur harum, ipsum
            eveniet sint! Aliquid rem facilis nesciunt, sint distinctio est modi
            molestiae commodi voluptate quibusdam placeat nihil. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Doloremque animi
            dolorem necessitatibus a quae nihil expedita ratione eos rem culpa
            assumenda enim ad voluptas beatae minima, ullam facilis aspernatur
            voluptate officiis voluptatem consequuntur. Repellendus nisi nihil
            consequuntur cumque quidem voluptas ut vel, maiores, beatae
            doloribus quo tenetur quos hic excepturi!
          </p>
          <div>
            <h2 className="text-xl font-medium">Room Services</h2>
            <ul>
              <li>- Towels</li>
              <li>- Microwave</li>
              <li>- WiFi</li>
              <li>- Air Conditioner</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Room Reviews</h2>
            <p>No reviews yet.</p>
          </div>
        </div>
        <div className="w-[25%] p-6">
          <div className="border border-gray-500 rounded-md p-4">
            <h1 className="text-center font-bold">Book your room</h1>
            <div className="m-8">
              <p>Choose reservation date:</p>
              <RangePicker />
              <Select placeholder="Geusts" className="w-28 mt-3">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
              <button className="block mt-2 rounded-md px-3 py-2 bg-slate-900 text-white w-full">
                <Link to={"confirm"}>Check Availability</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
