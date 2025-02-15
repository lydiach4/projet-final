"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [hasAppliedBefore, setHasAppliedBefore] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const router = useRouter();

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3002/appointment",
        {
          firstName,
          lastName,
          dateOfBirth: dateOfBirth.toISOString().split("T")[0],
          gender,
          email,
          phoneNumber,
          address,
          hasAppliedBefore,
          appointmentDate: appointmentDate.toISOString().split("T")[0],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Appointment booked successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error booking appointment", error);
      alert("Error booking appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-6xl font-thin text-center max-w-7xl mx-auto m-5 underline">
        Take an appointment <br />
      </h1>
      <form
        className="flex flex-col p-16 max-w-5xl mx-auto gap-4 border-2 rounded-xl bg-white shadow-lg"
        onSubmit={handleBooking}
      >
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold " htmlFor="firstname">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="border border-gray-600 p-3 text-xl rounded-lg w-full"
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="border w-full border-gray-600 p-3 text-xl rounded-lg"
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold p-3" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              className="border border-gray-600 p-3 text-xl rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold p-3" htmlFor="gender">
              Gender
            </label>
            <select
              className="border border-gray-600 p-3 text-xl rounded-lg"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            >
              <option value="">Please select an option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg"
              type="tel"
              name="phoneNumber"
              placeholder="5555-5555-5555"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Email"
              className="border border-gray-600 p-3 text-xl rounded-lg"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>
        <label className="text-xl font-semibold" htmlFor="address">
          Address
        </label>
        <input
          className="border border-gray-600 p-3 text-xl rounded-lg"
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <div className="mt-4">
          <label className="text-xl font-semibold">
            Have you ever applied to our facility before?
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasAppliedBefore"
                value="yes"
                onChange={(e) => setHasAppliedBefore(true)}
                checked={hasAppliedBefore === true}
                className="mr-2"
                required
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasAppliedBefore"
                value="no"
                onChange={(e) => setHasAppliedBefore(false)}
                checked={hasAppliedBefore === false}
                className="mr-2"
                required
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label
            className="text-xl font-semibold p-3"
            htmlFor="appointmentDate"
          >
            Appointment Date
          </label>
          <DatePicker
            selected={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            className="border border-gray-600 p-3 text-xl rounded-lg w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-full text-xl font-light py-3 m-6 border bg-cyan-700 text-white hover:bg-cyan-900 transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
