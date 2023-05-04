import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomsCard from "../../components/RoomsCard";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/rooms")
      .then((res) => {
        setRooms(res.data.rooms);
        console.log(res.data.rooms);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="border-b border-gray-200">
        <h1 className="text-4xl font-medium text-custom-gray py-8">Rooms</h1>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {rooms.length > 0 &&
          rooms.map((room) => (
            <RoomsCard
              id={room._id}
              title={room.title}
              location={room.location}
              hotel={room.hotel}
              image={room.image}
              geusts={room.geusts}
              description={room.description}
              price={room.price}
            />
          ))}
      </div>
    </>
  );
};

export default Rooms;
