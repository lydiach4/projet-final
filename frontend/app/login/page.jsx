"use client";

import Link from "next/link";
import { loginAction } from "@/lib/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password");

  const router = useRouter();

  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      useDispatch(loginAction(response.data.user));
      router.push("/");
    } catch (e) {
      alert("Error happened");
    }
  };
  return (
    <>
      <h1 className="text-7xl font-light text-center max-w-7xl mx-auto p-7 ">
        {" "}
        Login{" "}
      </h1>
      <form
        className=" border rounded-xl max-w-5xl p-16 flex flex-col gap-5 mx-auto "
        onSubmit={login}
      >
        <label className="text-xl font-light " htmlFor="email">
          {" "}
          Email:
        </label>
        <input
          className="border rounded-xl text-xl p-3  border-black"
          type="email"
          placeholder="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-xl font-light  " htmlFor="password">
          {" "}
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded-xl text-xl p-3  border-black"
          type="password"
          placeholder="Password"
        />
        <div className="text-center">
          <Link
            href={"/dashboard"}
            className="rounded-full border font-light text-xl  py-4 px-9  border-cyan-700"
          >
            Login
          </Link>
        </div>
      </form>
    </>
  );
}
export default login;
