import React from "react";
import address from "../assets/footer/address.png";
import android from "../assets/footer/android.svg";
import apple from "../assets/footer/apple.svg";
import arrow from "../assets/footer/arrow.svg";
import phone from "../assets/footer/phone.png";
import windows from "../assets/footer/windows.svg";

export default function Footer() {
  const sections = {
    Service: [
      { id: 1, name: "UI Design" },
      { id: 2, name: "Web Design" },
      { id: 3, name: "Digital Marketing" },
      { id: 4, name: "Video Editing" },
    ],
    About: [
      { id: 1, name: "Home" },
      { id: 2, name: "Testimonial" },
      { id: 3, name: "Portfolio" },
      { id: 4, name: "Blog" },
      { id: 5, name: "Details" },
    ],
  };

  return (
    <footer className="container">
      <div className="">
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
        <figure className="flex items-center justify-center -mt-5 bg-white w-[230px] mx-auto gap-[8px] ">
          <img src="https://i.postimg.cc/V6JgyZFJ/logo.png" alt="" />
          <h3 className="font-bold text-[30px] text-primary">CloudFlow</h3>
        </figure>
      </div>
      <main className="mt-[60px]">
        <article className="flex justify-between flex-wrap">
          <div>
            <h3 style={{ letterSpacing: "-0.3px" }} className="text-[26px] font-bold text-primary mb-[10px]">
              Newsletter
            </h3>
            <p className="lg:max-w-[29ch] ">Creative agency encompasses a wides range of services related to the design creative and strategic</p>
            <div className="flex items-center gap-[10px] mt-[14px] ">
              <figure className="p-[5px]  rounded-[5px] border border-[#D1D1D1]">
                <img className="size-[20px]" src={android} alt="" />
              </figure>
              <figure className="p-[5px] rounded-[5px] border border-[#D1D1D1]">
                <img className="size-[20px]" src={apple} alt="" />
              </figure>
              <figure className="p-[5px] rounded-[5px] border border-[#D1D1D1]">
                <img className="size-[20px]" src={windows} alt="" />
              </figure>
            </div>
          </div>
          {Object.entries(sections).map(([sectionTitle, sectionItems]) => (
            <div key={sectionTitle}>
              <h3 style={{ letterSpacing: "-0.3px" }} className="text-[26px] font-bold text-primary mb-[20px]">
                {sectionTitle}
              </h3>
              <ul>
                {sectionItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-[20px] mb-[10px]">
                    <img className="size-[14px]" src={arrow} alt="" />
                    <a style={{ letterSpacing: "-0.3px" }} className="inline-block " href="#">
                      {item.name}
                    </a>
                  </div>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 style={{ letterSpacing: "-0.3px" }} className="text-[26px] font-bold text-primary mb-[20px]">
              Contact
            </h3>
            <div className="space-y-[20px]">
              <div className="flex items-center gap-[20px] mb-[10px]">
                <figure className="p-[10px] bg-[#F5F5F7] rounded-[5px]">
                  <img className="size-[20px]" src={address} alt="" />
                </figure>
                <div>
                  <p>Old city Street,Usa</p>
                  <p>1223 california-3500</p>
                </div>
              </div>
              <div className="flex items-center gap-[20px] mb-[10px]">
                <figure className="p-[10px] bg-[#F5F5F7] rounded-[5px] ">
                  <img className="size-[20px]" src={phone} alt="" />
                </figure>
                <div>
                  <p>(+888) 123 456 765</p>
                  <p>(+888) 123 987 765</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full h-[1px] bg-[#D1D1D1] mt-[80px] mb-[20px]"></div>
        <article className="flex items-center justify-center flex-wrap mb-[37px] ">
          <div className="text-[#514A74]" style={{ letterSpacing: "-0.3px" }}>
            &copy; {new Date().getFullYear()} DesignCurved 2024 | All Rights Reserved
          </div>
          <div className="flex gap-[30px] text-[#514A74] ">
            <a style={{ letterSpacing: "-0.176px" }} className="inline-block" href="#">
              Trams & Condition
            </a>
            <a style={{ letterSpacing: "-0.176px" }} className="inline-block" href="#">
              Privacy Policy
            </a>
            <a style={{ letterSpacing: "-0.176px" }} className="inline-block" href="#">
              Contact Us
            </a>
          </div>
        </article>
      </main>
    </footer>
  );
}
