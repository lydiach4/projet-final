"use client";
import { useState } from "react";

function booking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <h1 className="text-8xl font-semibold text-center max-w-7xl mx-auto mb-6">
        Take an appointement <br />
        <span className="text-4xl font-light text-center max-w-7xl mx-auto">
          (Fill all the informations below)
        </span>
      </h1>{" "}
      <form className="flex flex-col p-16 max-w-5xl mx-auto   gap-4 border-2 rounded-xl  ">
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold " htmlFor="firstname">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="border border-gray-600 p-3 text-xl rounded-lg w-full "
              type="text"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="border w-full border-gray-600 p-3 text-xl rounded-lg "
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full ">
            <label
              className="text-xl font-semibold p-3"
              htmlFor="Date of Birth"
            >
              Date of Birth
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="date"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold p-3" htmlFor="gender">
              Gender
            </label>
            <select
              className="border border-gray-600 p-3 text-xl rounded-lg "
              name="gender"
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="select"> please select an option</option>
              <option value="men">men</option>
              <option value="women"> women</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-xl font-semibold" htmlFor="phonenumber">
              Phone Number
            </label>
            <input
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="tel"
              name="phonenumber"
              placeholder="5555-5555-5555"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="flex flex-col w-full">
            {" "}
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Email"
              className="border border-gray-600 p-3 text-xl rounded-lg "
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <label className="text-xl font-semibold" htmlFor="adress">
          Adress
        </label>
        <input
          className="border border-gray-600 p-3 text-xl rounded-lg "
          type="text"
          name="adress"
        />

        <div className=" gap-10">
          <label className="text-xl font-semibold">
            Have you ever applied to our facility before{" "}
          </label>
          <div className="flex ">
            <input type="radio" name="yes" />
            <p htmlFor="yes" className="text-xl ">
              Yes
            </p>
          </div>
          <div className="flex">
            {" "}
            <input type="radio" name="no" placeholder="no" />
          
          </div>
        </div>
        <button className="rounded-full text-xl font-light py-3 m-6 border">
          Book Now
        </button>
      </form>
    </>
  );
}
export default booking;
