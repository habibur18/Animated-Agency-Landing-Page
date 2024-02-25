import React from "react";
import service1 from "../assets/services/1.svg";
import service2 from "../assets/services/2.svg";
import service3 from "../assets/services/3.svg";
import service4 from "../assets/services/4.svg";
import cloudIcon from "/CLOUD.svg";
export default function ServiceHighlights() {
  const servicesData = [
    { title: "Creative Pixel", src: service1, desc: "Creative agency encom a wide the range of services related to creative ", bg: "bg-[#95D5EE]/[0.1]" },
    { title: "Artistic Wave", src: service2, desc: "Creative agency encom a wide the range of services related to creative ", bg: "bg-[#FAF7F0]" },
    { title: "Design Forge", src: service3, desc: "Creative agency encom a wide the range of services related to creative ", bg: "bg-[#FAF7F0]" },
    { title: "Innovation Hub", src: service4, desc: "Creative agency encom a wide the range of services related to creative ", bg: "bg-[#95D5EE]/[0.1]" },
  ];
  return (
    <section className="container">
      <div>
        <h1 className=" text-[43px] font-bold max-w-[20ch] mx-auto text-center mb-[69px]">
          Simplify your business with the Saas <img className="inline" src={cloudIcon} alt="" /> services
        </h1>
        <main className="grid  md:grid-cols-2 gap-[30px]">
          {servicesData.map((data) => (
            <div key={data.title} className={`flex items-center gap-[37px] p-[40px] ${data.bg} rounded-[20px]`}>
              <figure>
                <img src={data.src} alt="" />
              </figure>
              <div>
                <h1 style={{ letterSpacing: "-0.3px" }} className="font-bold text-[26px] text-primary">
                  {data.title}
                </h1>
                <p className="max-w-[34ch] mt-[20px]">{data.desc}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
