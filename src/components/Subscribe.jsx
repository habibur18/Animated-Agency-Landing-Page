import React from "react";
import leftImg from "../assets/subscribe/1.png";
import subscribeImg from "../assets/subscribe/Subscribe.png";

export default function Subscribe() {
  return (
    <section className="bg-[#F5F5F7]">
      <main className="container">
        <div className=" flex flex-col lg:flex-row items-center">
          <img className="-mt-24" src={leftImg} alt="" />
          <div className="self-center">
            <h1 className="text-[43px] font-bold text-primary">Your Vision, Our Passion Outstanding Results</h1>
            <img className="-mt-10" src={subscribeImg} alt="" />
            <div className="flex flex-col lg:flex-row gap-6 my-5">
              <input type="text" className="border border-[#D1D1D1] p-4 rounded-full  w-full" placeholder="Enter Your Email" />
              <button type="submit" className="py-[20px] px-[30px] bg-[#2928E8] rounded-full text-[#FFF] font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
