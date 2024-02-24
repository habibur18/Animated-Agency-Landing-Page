import React from "react";
import downArrow from "/arrowD.svg";
import callIcon from "/call.svg";
export default function Header() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Page",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      <header className="flex justify-between items-center py-[30px] container">
        <figure className="flex items-center gap-[8px] ">
          <img src="https://i.postimg.cc/V6JgyZFJ/logo.png" alt="" />
          <h3 className="font-bold text-[30px] text-primary">CloudFlow</h3>
        </figure>

        <div>
          <ul className="flex gap-[34px]">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.link} className=" text-primary font-[900] flex items-center gap-[8px]">
                  {link.name}
                  <img src={downArrow} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[15px]">
          <figure className="bg-primary rounded-full p-[20px]">
            <img className="w-[30px] h-[30px]" src={callIcon} alt="" />
          </figure>
          <div>
            <p style={{ letterSpacing: "-0.176px" }} className="text-primary">
              Need help?
            </p>
            <p className="text-primary text-[21px] font-bold">(808) 555-0111</p>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
}
