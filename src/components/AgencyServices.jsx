import React from "react";
import contentCopy from "../assets/agencyServices/1.png";
import dataActivity from "../assets/agencyServices/2.png";
import socialActivity from "../assets/agencyServices/3.png";
import socialStrategy from "../assets/agencyServices/4.png";
import chartImg from "../assets/agencyServices/5.png";

export default function AgencyServices() {
  const data = [
    { id: 1, title: "Content and Copywriting", desc: "odit quidem corporis", src: contentCopy, bg: "bg-[#B195EE]/[0.2]" },
    { id: 2, title: "Content and Copywriting", desc: "odit quidem corporis", src: dataActivity, bg: "bg-[#95D5EE]/[0.2]" },
    { id: 3, title: "Social Media Strategy ", desc: "odit quidem corporis", src: socialActivity, bg: "bg-[#F9E58F]/[0.2]" },
    { id: 4, title: "Social Media Strategy", desc: "odit quidem corporis", src: socialStrategy, bg: "bg-[#97EE95]/[0.2]" },
    { id: 5, title: "Brand Identity and Logo Design", desc: "odit quidem corporis", src: chartImg, bg: "bg-[#F9A78F]/[0.2]" },
  ];
  return (
    <section className="container">
      <main>
        <div>
          <h1 className="text-[43px] font-bold"> Where Imagination Meets the agency Innovation</h1>
        </div>
        <article className="grid grid-cols-12 gap-[30px]">
          {data.map((data, idx) => (
            <div key={data.id} className={`flex flex-col ${idx === 3 && "lg:max-w-[410px]"} ${idx === 3 || (idx === 4 && "lg:max-h-[419px]")} ${data.bg} ${idx === 0 || idx === 1 || idx === 2 || idx === 3 ? "col-span-12 md:col-span-6 lg:col-span-4 lg:max-w-[450px] lg:max-h-[403px]" : "col-span-12 md:col-span-1s2 lg:col-span-8"} pt-[27px] pb-[40px] px-[40px] rounded-[20px]`}>
              <figure className={`${idx === 4 && "flex-grow flex items-center justify-center"}`}>
                <img className="mx-auto" src={data.src} alt="" />
              </figure>
              <div className="mt-[18px] ">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
}
