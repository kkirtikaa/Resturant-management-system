import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";

const Reservationform = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        backendUrl + "/api/reservations/create",
        formData
      );

      toast.success("Reservation created successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "1",
      });

    } catch (error) {
      console.log(error);
      toast.error("Reservation failed");
    }
  };

  const generateTimeslots = () => {
    const slots = [];

    for (let hour = 9; hour < 21; hour++) {

      const start = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";

      const end = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = (hour + 1) < 12 ? "AM" : "PM";

      slots.push(`${start}:00 ${startPeriod} - ${end}:00 ${endPeriod}`);
    }

    return slots;
  };

  return (
    <div className="min-h-screen p-6 md:p-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3">

        {/* FORM */}
        <form onSubmit={handleSubmit} className="md:col-span-2 p-8 shadow-md">

          <h2 className="text-xl font-semibold text-amber-500 uppercase">
            Online Reservation
          </h2>

          <h1 className="text-3xl font-bold mb-6">
            Dine with Us - <span className="text-amber-500">Reserve Now</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 border"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 border"
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 border"
              required
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 border"
              required
            >
              <option value="">Select Time</option>

              {generateTimeslots().map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}

            </select>

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="p-3 border"
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Guest(s)
                </option>
              ))}
            </select>

          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-amber-500 text-white py-3"
          >
            Book a Table
          </button>

        </form>

        {/* SIDE PANEL */}
        <div className="p-8 space-y-8 text-center">

          <div>
            <h3 className="text-2xl font-bold">Address</h3>
            <p>123, Sample Street, City</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Call Us</h3>
            <p>+0123-456-789</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Open Time</h3>
            <p>Mon - Fri: 11AM - 10PM</p>
          </div>

          <div className="flex gap-4 justify-center text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaReddit />
            <FaYoutube />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Reservationform;