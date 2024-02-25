import React from "react";
import seo from "../assets/ukti/1-seo.svg";
import calender from "../assets/ukti/2-calendar.svg";
import artitech from "../assets/ukti/3-architect.svg";
import wave from "../assets/ukti/arrow-arrow.svg";
import comma from "../assets/ukti/comma.svg";
import left1 from "../assets/ukti/right-1.png";
import left2 from "../assets/ukti/right-2.png";
export default function WhatWeSay() {
  const data = [
    { id: 1, title: "Winning award", count: "200+", src: seo },
    { id: 2, title: "Total Project", count: "650+", src: calender },
    { id: 3, title: "Happy Clients", count: "120+", src: artitech },
  ];
  return (
    <>
      <section className="bg-[#FAF7F0] pt-[120px] pb-[248px] border-8">
        <main className="container flex flex-col-reverse items-center lg:flex-row lg:gap-[90px]">
          <article className="w-full ">
            <div className="bg-[#2928E8] p-[20px] rounded-full inline-block">
              <img className="" src={comma} alt="" />
            </div>
            <div>
              <p style={{ letterSpacing: "-0.176px" }} className="text-[24px] mt-[41px] mb-[51px] text-[#514A74] ">
                Creative agency encompasses wide range of services related i the creative and st marketing These agencies specialize in offering innovative solutions to clients branding loren ipsum
              </p>
              <div className="flex gap-[20px]">
                <div className="w-[55px] mt-2 h-[1px] bg-primary"></div>
                <div>
                  <h5 style={{ letterSpacing: "-0.3px" }} className="text-[26px] font-bold text-primary">
                    Michael Ramirez
                  </h5>
                  <p style={{ letterSpacing: "-0.176px" }} className="text-[#514A74]">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex gap-[30px] w-full relative">
            <figure className="w-full">
              <img style={{ borderRadius: "205px 205px 202px 205px", zIndex: 1 }} className="lg:w-[350px] h-[503px] border object-cover relative" src={left1} alt="" />
            </figure>
            <figure className="w-full mt-14 relative">
              <div className="absolute hidden lg:block -top-2 left-10 border-[5px] border-[#2928E8] z-0 w-[244px] h-[410px] rounded-[205px]"></div>
              <img className="lg:w-[244px] h-[417px] rounded-[205px] object-cover z-10 relative" src={left2} alt="" />
            </figure>
          </article>
        </main>
      </section>
      <main style={{ backgroundImage: `url(${wave})` }} className="bg-[#95D5EE] py-[80px] px-[20px] max-w-[1380px] mx-auto rounded-[20px] -mt-44">
        <div className="flex flex-wrap gap-9 items-center justify-evenly">
          {data.map((data) => (
            <div key={data.id} className="flex items-center gap-[25px]">
              <figure className="bg-[#FAF7F0]/[0.5] rounded-[20px] p-[17px]">
                <img src={data.src} alt="" />
              </figure>
              <div>
                <h5 style={{ letterSpacing: "-0.176px" }}>{data.title}</h5>
                <h1 className="text-[43px] font-bold">{data.count}</h1>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
