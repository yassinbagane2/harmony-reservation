import React from "react";
import roomImg from "../../assets/room3.jpg";
const ConfirmReservation = () => {
  return (
    <>
      <div className="border-b border-gray-200">
        <h1 className="text-4xl font-medium text-custom-gray py-8">
          Confirm your reservation
        </h1>
      </div>
      <div className="flex px-6 mt-4">
        <div className="flex-1">
          <div className="flex border rounded-md overflow-hidden w-[80%]">
            <img className="h-44 w-72 object-cover" src={roomImg} alt="room" />
            <div className="ml-2">
              <h1 className="font-medium text-2xl">Single room</h1>
              <p className="text-gray-500">Check in: 10/05/2023</p>
              <p className="text-gray-500">Check out: 16/05/2023</p>
              <div>
                <span className="font-semibold">Geusts:</span> 3
              </div>
              <div className="bg-gray-200 flex justify-between mt-6 px-3 py-2">
                <div>Total price:</div>
                <div>820DT</div>
              </div>
            </div>
          </div>
        </div>
        <form className="border flex-1 border-gray-300 rounded-md p-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="fullname">
              Fullname
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="fullname"
              id="fullname"
              placeholder="Jhon doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="email"
              id="email"
              placeholder="Jhondoe@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="phone">
              Phone number
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="phone"
              id="phone"
              placeholder="+216 ** *** ***"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="address"
              id="address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="city"
              id="city"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="zip">
              ZIP
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="zip"
              id="zip"
            />
            <button
              className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md mt-2"
              type="submit"
            >
              Proceed to checkout
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfirmReservation;
