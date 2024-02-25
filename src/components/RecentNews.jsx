// import React from "react";

// import news1 from "../assets/ourNews/1.png";
// import news2 from "../assets/ourNews/2.png";
// import news3 from "../assets/ourNews/3.png";
// import leftArrow from "../assets/ourNews/arrow-left.svg";
// import arrowNews from "../assets/ourNews/arrow-news.svg";
// import rightArrow from "../assets/ourNews/arrow-right.svg";
// import comment from "../assets/ourNews/comment.png";
// import user from "../assets/ourNews/user.svg";
// export default function RecentNews() {
//   const data = [
//     { id: 1, title: "Creativity Unleashed the a Success Attained", author: "admin", comments: "30 ", src: news1 },
//     { id: 2, title: "Empowering Brands the a through Creative", author: "admin", comments: "30 ", src: news2 },
//     { id: 3, title: "The Rise of Plant-Based Diets Rise of Plant", author: "admin", comments: "30 ", src: news3 },
//   ];
//   return (
//     <section className="container ">
//       <div className="flex justify-between items-center">
//         <h1 className="text -[43px] font-bold text-primary lg:max-w-[20ch]">Crafting Brands That Stand Out from the Crowd</h1>
//         <div className="flex gap-5 items-center">
//           <div className="bg-gray-400/[0.1] size-[60px] rounded-full p-[22px] shadow-sm cursor-pointer">
//             <img src={leftArrow} alt="" />
//           </div>
//           <div className="bg-[#2928E8] size-[60px] rounded-full p-[22px] shadow-sm cursor-pointer">
//             <img src={rightArrow} alt="" />
//           </div>
//         </div>
//       </div>
//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
//         {data.map((data, idx) => (
//           <div key={data.id} className={`${idx === 1 && "border-b-[3px] border-[#95D5EE]"} bg-white rounded-[20px] shadow-md`}>
//             <div className="relative">
//               <img className="h-[300px] rounded-lg" src={data.src} alt="" />
//               <p className="absolute bottom-0 left-0 py-7 px-12 text-white bg-[#2928E8] rounded-tr-[15px]">October 19, 2022</p>
//             </div>
//             <div className=" p-[40px]">
//               <div className="flex justify-between items-center">
//                 <div className="flex gap-3">
//                   <img className="size-[20px]" src={user} alt="" />
//                   <p className="text-[#514A74]">By {data.author}</p>
//                 </div>
//                 <div className="flex gap-3">
//                   <img className="size-[20px]" src={comment} alt="" />
//                   <p className="text-[#514A74]">comments ({data.comments} )</p>
//                 </div>
//               </div>
//               <div>
//                 <h1 style={{ letterSpacing: "-0.3px" }} className="text-[26px] mt-[20px] mb-[30px] font-bold text-primary">
//                   Creativity Unleashed the a Success Attained
//                 </h1>
//                 <a href="#" className="block">
//                   Read More <img className="inline ml-4" src={arrowNews} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </section>
//   );
// }

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import news1 from "../assets/ourNews/1.png";
import news2 from "../assets/ourNews/2.png";
import news3 from "../assets/ourNews/3.png";
import leftArrow from "../assets/ourNews/arrow-left.svg";
import arrowNews from "../assets/ourNews/arrow-news.svg";
import rightArrow from "../assets/ourNews/arrow-right.svg";
import comment from "../assets/ourNews/comment.png";
import user from "../assets/ourNews/user.svg";

export default function RecentNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const data = [
    { id: 1, title: "Creativity Unleashed the a Success Attained", author: "admin", comments: "30", src: news1 },
    { id: 2, title: "Empowering Brands the a through Creative", author: "admin", comments: "30", src: news2 },
    { id: 3, title: "The Rise of Plant-Based Diets Rise of Plant 3", author: "admin", comments: "30", src: news3 },
    { id: 4, title: "The Rise of Plant-Based Diets Rise of Plant 4", author: "admin", comments: "30", src: news3 },
    { id: 5, title: "The Rise of Plant-Based Diets Rise of Plant 5", author: "admin", comments: "30", src: news3 },
    { id: 6, title: "The Rise of Plant-Based Diets Rise of Plant 6", author: "admin", comments: "30", src: news3 },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % data.length);
    setDirection("left");
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + data.length) % data.length);
  };

  return (
    <section className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-[43px] font-bold text-primary lg:max-w-[20ch]">Crafting Brands That Stand Out from the Crowd</h1>
        <div className="flex gap-5 items-center">
          <div className="bg-gray-400/[0.1] size-[60px] rounded-full p-[22px] shadow-sm cursor-pointer" onClick={handlePrev}>
            <img src={leftArrow} alt="" />
          </div>
          <div className="bg-[#2928E8] size-[60px] rounded-full p-[22px] shadow-sm cursor-pointer" onClick={handleNext}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
        <AnimatePresence mode="wait">
          {data.slice(currentIndex, currentIndex + 3).map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: { x: direction === "left" ? -100 : 100 } }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: { x: direction === "left" ? 100 : -100 } }} transition={{ duration: 0.5 }} className={`${currentIndex === 1 && "border-b-[3px] border-[#95D5EE]"} bg-white rounded-[20px] shadow-md`}>
              <div className="relative">
                <img className="h-[300px] w-full object-cover rounded-lg" src={item.src} alt="" />
                <p className="absolute bottom-0 left-0 py-7 px-12 text-white bg-[#2928E8] rounded-tr-[15px]">October 19, 2022</p>
              </div>
              <div className="p-[40px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <img className="size-[20px]" src={user} alt="" />
                    <p className="text-[#514A74]">By {item.author}</p>
                  </div>
                  <div className="flex gap-3">
                    <img className="size-[20px]" src={comment} alt="" />
                    <p className="text-[#514A74]">comments ({item.comments})</p>
                  </div>
                </div>
                <div>
                  <h1 style={{ letterSpacing: "-0.3px" }} className="text-[26px] mt-[20px] mb-[30px] font-bold text-primary">
                    {item.title}
                  </h1>
                  <a href="#" className="block">
                    Read More <img className="inline ml-4" src={arrowNews} alt="" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </section>
  );
}
