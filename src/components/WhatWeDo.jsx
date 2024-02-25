import React from "react";
import left from "../assets/whatWeDo/LandScapemode-bro.svg";
import web from "../assets/whatWeDo/webdesign.svg";
import wifi from "../assets/whatWeDo/wifi.svg";

export default function WhatWeDo() {
  const data = [
    { title: "Content Wizards", desc: "Creative agency encompasses a wide range of services related to creative and strategic marketing ", src: wifi },
    { title: "Idea Makers", desc: "Creative agency encompasses a wide range of services related to creative and strategic marketing ", src: web },
  ];
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <article className="w-full flex justify-center">
          <img className="w-full md:max-w-[600px] lg:max-w-full" src={left} alt="" />
        </article>
        <article className="w-full">
          <div>
            <h1 className="text-[43px] font-bold">We develop product that the people love to use</h1>
            <p style={{ letterSpacing: "-0.176px" }} className="mt-[20px] mb-[70px]">
              Creative agency encompasses a wide an services related to creative and strategic marketing These age specialize in offering innovative solutions to clients branding and communication needs loren ipsum
            </p>
          </div>
          <div className="space-y-[36px]">
            {data.map((item) => (
              <div key={item.title} className="flex gap-[30px]">
                <figure className="p-[16px] bg-[#2928E8] rounded-full flex justify-center items-center w-[62px] h-[62px]">
                  <img src={item.src} alt="" />
                </figure>
                <div>
                  <h3 style={{ letterSpacing: "-0.8px" }} className="text-[26px] font-bold">
                    {item.title}
                  </h3>
                  <p style={{ letterSpacing: "-0.176px" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
