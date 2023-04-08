/** @format */

import React from "react";
import logo from "../images/logo.png";
import Lottie from "react-lottie";
import discussAnimation from "../loteeAnimation/discussBusiness.json";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Heading() {
  // Lotte Animation element
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: discussAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="h-14 bg-stone-300">
        <p className=" text-center p-4 tracking-wide text-base text-zinc-800">
          Use this banner to inform your users of something important.
        </p>
      </div>

      <div className="flex justify-around items-center bg-gray-100 h-24">
        <nav className="-ml-52">
          <ul className="flex gap-6 ">
            <li className="p-3">HOME</li>
            <li className="p-3">SHOP</li>
            <li className="p-3">ABOUT US</li>
            <li className="p-3">CONTACT US</li>
          </ul>
        </nav>
        <img className="h-14" src={logo} alt="logo" />

        <div className="flex gap-4">
          <IoIosSearch className="h-5 w-5" />
          <BsPerson className="h-5 w-5" />
          <AiOutlineShoppingCart className="h-5 w-5" />
        </div>
      </div>
      <div className="flex  justify-around items-center">
        <div className="max-w-lg my-44 ">
          <h1 className=" text-5xl font-bold text-stone-500 leading-normal tracking-tight">
            Introduce Your Product <br /> Quickly & Effectively
          </h1>
          <p className="text-stone-500 mt-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button className="mt-12 py-3 px-14 bg-stone-400 text-zinc-800 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-stone-700 hover:text-wh duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="py-14">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}
