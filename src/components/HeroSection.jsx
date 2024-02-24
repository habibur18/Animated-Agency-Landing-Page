import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F7] pt-[64px] pb-[97px]">
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1360px] mx-auto px-[20px] lg:px-[60px] 2xl:px-0">
        <div className="">
          <h1 className="text-[5.125rem] font-bold text-primary lg:max-w-[12ch]">Bring your business into creativity</h1>
          <p className="max-w-[38ch] mt-[24px] mb-[40px] text-[#514A74]">Incorporating a business offers benefits tax limited liability protection tax the</p>
          <button className="px-[30px] py-[19px] bg-[#2928E8] rounded-[10px] text-white font-bold">Gent Started</button>
        </div>
        <div className="w-[70%]">
          <img className="w-full 2xl:ml-44 2xl:-mt-10 " src="https://i.postimg.cc/MHzMSv7v/main2.png" alt="" />
        </div>
      </main>
    </section>
  );
}
