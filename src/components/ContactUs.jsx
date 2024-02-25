import React from "react";
import numberLogo from "../assets/contactUs/phone-logo.svg";
export default function ContactUs() {
  return (
    <section className="container">
      <main className="flex flex-col lg:flex-row  justify-between gap-12">
        <div className="flex-[0.4]">
          <h1 className="text-[43px] font-bold lg:max-w-[12ch] text-primary">Contact For Urgent Service</h1>
          <p style={{ letterSpacing: "-0.176px" }} className="lg:max-w-[28ch] mt-[20px] mb-[45px]">
            Creative agency encompasses a wides range of services related to the design creative and strategic
          </p>
          <div className="flex gap-[20px] items-center">
            <figure className="bg-[#F5F5F7] p-[15px] rounded-full">
              <img src={numberLogo} alt="" />
            </figure>
            <p className="text-[21px] text-primary">+(201) 555-0124</p>
          </div>
        </div>
        <div className="lg:flex-[0.6]">
          <form>
            <div className="grid grid-cols-12 gap-x-[20px] gap-y-[18px]">
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4 w-full rounded-lg">
                <input className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" type="text" name="name" id="name" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Your name
                </label>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4  w-full rounded-lg">
                <input className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" type="email" name="email" id="email" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Email
                </label>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4  w-full rounded-lg">
                <input className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" type="text" name="date" id="date" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Date
                </label>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4  w-full rounded-lg">
                <input className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" type="text" name="address" id="address" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Your Address
                </label>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4  w-full rounded-lg">
                <input className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" type="text" name="phone" id="phone" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Phone Number
                </label>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-4  w-full rounded-lg">
                <select className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] text-[#514A74] focus:outline-none w-full" name="" id="">
                  <option value="">Chose a Option</option>
                  <option value="">Website Design</option>
                  <option value="">Seo</option>
                </select>
              </div>
              <div className="relative col-span-12  w-full rounded-lg">
                <textarea rows="4" className="peer rounded-[20px] border border-[#D1D1D1] py-[18px] px-[20px] w-full text-[#514A74] focus:outline-none" type="text" name="phone" id="phone" placeholder="" />
                <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#514A74] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[22px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">
                  Write Message..
                </label>
              </div>
            </div>

            <button type="submit" className="py-[20px] mt-[35px] px-[30px] bg-[#2928E8] rounded-full text-[#FFF] font-bold">
              Submit Now
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}
