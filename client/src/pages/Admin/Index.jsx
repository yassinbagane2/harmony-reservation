import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
const Index = () => {
  const [image, setImage] = useState("");
  const formData = new FormData();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      hotel: "",
      location: "",
      geusts: "",
      price: "",
      description: "",
    },

    onSubmit: (values, { resetForm }) => {
      formData.append("title", values.title);
      formData.append("hotel", values.hotel);
      formData.append("location", values.location);
      formData.append("geusts", values.geusts);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("image", image);
      axios
        .post("http://localhost:8000/add-room", formData)
        .then((res) => {
          console.log(res.data);
          resetForm();
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <nav className="flex items-center justify-between max-w-[1300px] mx-auto py-4">
        <h1 className="font-bold">HARMONY.</h1>
        <button className="border border-gray-800 px-3 py-2 rounded-lg">
          <Link to="/">Signout</Link>
        </button>
      </nav>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex gap-10">
          <button className="px-3 py-2 text-white bg-rose-600 w-32 rounded-3xl outline-none border-0">
            Add room
          </button>
          <button className="px-3 py-2 text-white bg-rose-600 w-32 rounded-3xl outline-none border-0">
            Add hotel
          </button>
          <button className="px-3 py-2 text-white bg-rose-600 w-32 rounded-3xl outline-none border-0">
            Reservations
          </button>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-5 w-[500px]">
          <div>
            <label className="text-xl font-medium" htmlFor="title">
              Title
            </label>
            <p className="text-gray-500">
              Title for your place, should be short and catchy as in
              advertisment
            </p>
            <input
              type="text"
              className="rounded-3xl border py-2 px-3 w-full outline-none mt-2"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div>
            <label className="text-xl font-medium" htmlFor="title">
              Hotel name
            </label>
            <p className="text-gray-500">Your hotel name (not required)</p>
            <input
              type="text"
              className="rounded-3xl border py-2 px-3 w-full outline-none mt-2"
              name="hotel"
              id="hotel"
              onChange={formik.handleChange}
              value={formik.values.hotel}
            />
          </div>
          <div>
            <label className="text-xl font-medium" htmlFor="title">
              Location
            </label>
            <p className="text-gray-500">Your hotel Location</p>
            <input
              type="text"
              className="rounded-3xl border py-2 px-3 w-full outline-none mt-2"
              name="location"
              id="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>
          <div>
            <label className="text-xl font-medium" htmlFor="title">
              Max geusts
            </label>
            <p className="text-gray-500">Maximum number of geuts</p>
            <input
              type="text"
              className="rounded-3xl border py-2 px-3 w-full outline-none mt-2"
              name="geusts"
              onChange={formik.handleChange}
              value={formik.values.geusts}
              id="geusts"
            />
          </div>
          <div>
            <label className="text-xl font-medium" htmlFor="title">
              Price/night
            </label>
            <p className="text-gray-500">
              How much it cost to stay for 1 night
            </p>
            <input
              type="text"
              className="rounded-3xl border py-2 px-3 w-full outline-none mt-2"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              id="price"
            />
          </div>
          <label className="text-xl font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            className="border rounded-md outline-none"
            name="description"
            id="description"
            cols="65"
            rows="10"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          <input onChange={handleImage} type="file" name="image" id="image" />
          <button
            className="block py-2 px-3 rounded-3xl bg-rose-600 text-white mt-2 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
