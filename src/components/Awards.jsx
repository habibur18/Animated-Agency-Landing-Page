import React from "react";
import bg from "../assets/awardSection/code.png";
import code from "../assets/awardSection/code.svg";
import award1 from "../assets/awardSection/left-1.png";
import award2 from "../assets/awardSection/left-2.png";
import people from "../assets/awardSection/left-peoples.png";
export default function Awards() {
  return (
    <section className="container">
      <main className=" flex flex-col lg:flex-row items-center gap-12">
        <article className=" w-full mx-auto flex flex-col items-center">
          <div className="flex gap-[30px]">
            <figure>
              <img src={award1} alt="" />
            </figure>
            <figure className="relative">
              <img src={award2} alt="" />
              <div className="absolute -bottom-10 right-0 p-[20px] flex items-center gap-[15px]">
                <figure>
                  <img src={people} alt="" />
                </figure>
                <div>
                  <h4 className="text-[26px] text-primary font-bold">5,0000+</h4>
                  <p style={{ letterSpacing: "-0.176px" }} className="text-[#514A74]">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </article>
        <article className="w-full">
          <h1 className="text-[43px] font-bold text-primary">Unleash Your Brand's Creative Potential the agency</h1>
          <p style={{ letterSpacing: "-0.176px" }} className="text-[#514A74] mb-[46px] mt-[25px]">
            Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis mauris et eros vulputate mattis Nulla vitae ex nunc.
          </p>
          <div style={{ boxShadow: "0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)" }} className="relative flex border-2 max-w-[340px] py-[24px] rounded-[20px] mx-auto lg:mx-0">
            <div className="-ml-8">
              <figure className="relative">
                <img src={bg} alt="" />
                <div className="absolute inset-0 flex items-center left-4">
                  <img className="max-w-full max-h-full" src={code} alt="" />
                </div>
              </figure>
            </div>
            <div className="text-primary text-center w-full mx-auto">
              <h1 className="flex items-center gap-[15px] justify-center">
                <span className="text-[43px] font-bold">20+</span> <span className="text-[21px] font-bold">Winning award</span>
              </h1>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}
