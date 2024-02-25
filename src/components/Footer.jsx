import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <div className="">
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
        <figure className="flex items-center justify-center -mt-5 bg-white w-[290px] mx-auto gap-[8px] ">
          <img src="https://i.postimg.cc/V6JgyZFJ/logo.png" alt="" />
          <h3 className="font-bold text-[30px] text-primary">CloudFlow</h3>
        </figure>
      </div>
    </footer>
  );
}
