// import React, { Fragment } from "react";
// import brandCraft from "../assets/brandMarqee/1_BrandCraft.png";
// import SASS from "../assets/brandMarqee/2_SAAS.png";
// import pixelPerfect from "../assets/brandMarqee/3_PixelPerfect.png";
// import ContentWizards from "../assets/brandMarqee/4_ContentWizards.png";
// import BrandRevive from "../assets/brandMarqee/5_BrandRevive.png";
// import SAASStroke from "../assets/brandMarqee/6_SAAS.png";
// import Marquee from "react-fast-marquee";
// export default function BrandMarqee() {
//   const brandData1 = [
//     { title: "BrandCraft", src: brandCraft },
//     { title: "SASS", src: SASS },
//     { title: "PixelPerfect", src: pixelPerfect },
//     { title: "ContentWizards", src: ContentWizards },
//     { title: "BrandRevive", src: BrandRevive },
//     { title: "SAASStroke", src: SAASStroke },
//   ];
//   const brandData2 = [
//     { title: "BrandCraft", src: brandCraft },
//     { title: "SASS", src: SASS },
//     { title: "PixelPerfect", src: pixelPerfect },
//     { title: "ContentWizards", src: ContentWizards },
//     { title: "BrandRevive", src: BrandRevive },
//     { title: "SASS1", src: SASS },
//   ];
//   return (
//     <section className="bg-[#F5F5F7] py-[40px]">
//       <article className="space-y-[30px]">
//         <div className="flex items-center gap-[30px]">
//           {brandData1.map((data) => (
//             <Fragment key={data.title}>
//               <di>
//                 <figure>
//                   <img src={data.src} alt="" />
//                 </figure>
//               </di>
//               <div className="bg-primary w-[15px] h-[3px]"></div>{" "}
//             </Fragment>
//           ))}
//         </div>
//         <div className="flex items-center gap-[30px]">
//           {brandData2.map((data) => (
//             <Fragment key={data.title}>
//               <di>
//                 <figure>
//                   <img src={data.src} alt="" />
//                 </figure>
//               </di>
//               <div className="bg-primary w-[15px] h-[3px]"></div>{" "}
//             </Fragment>
//           ))}
//         </div>
//       </article>
//     </section>
//   );
// }

import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";
import brandCraft from "../assets/brandMarqee/1_BrandCraft.png";
import SASS from "../assets/brandMarqee/2_SAAS.png";
import pixelPerfect from "../assets/brandMarqee/3_PixelPerfect.png";
import ContentWizards from "../assets/brandMarqee/4_ContentWizards.png";
import BrandRevive from "../assets/brandMarqee/5_BrandRevive.png";
import SAASStroke from "../assets/brandMarqee/6_SAAS.png";

export default function BrandMarqee() {
  const brandData1 = [
    { title: "BrandCraft", src: brandCraft },
    { title: "SASS", src: SASS },
    { title: "PixelPerfect", src: pixelPerfect },
    { title: "ContentWizards", src: ContentWizards },
    { title: "BrandRevive", src: BrandRevive },
    { title: "SAASStroke", src: SAASStroke },
  ];
  const brandData2 = [
    { title: "BrandCraft", src: brandCraft },
    { title: "SASS", src: SASS },
    { title: "PixelPerfect", src: pixelPerfect },
    { title: "ContentWizards", src: ContentWizards },
    { title: "BrandRevive", src: BrandRevive },
    { title: "SASS1", src: SASS },
  ];
  return (
    <section className="bg-[#F5F5F7] py-[40px]">
      <article className="space-y-[30px]">
        <Marquee direction="left" speed={40}>
          <div className="flex items-center gap-[30px]">
            {brandData1.map((data) => (
              <Fragment key={data.title}>
                <div>
                  <figure>
                    <img src={data.src} alt="" />
                  </figure>
                </div>
                <div className="bg-primary w-[15px] h-[3px]"></div>{" "}
              </Fragment>
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" speed={40}>
          <div className="flex items-center gap-[30px]">
            {brandData2.map((data) => (
              <Fragment key={data.title}>
                <div>
                  <figure className="">
                    <img src={data.src} alt="" />
                  </figure>
                </div>
                <div className="bg-primary w-[15px] h-[3px]"></div>{" "}
              </Fragment>
            ))}
          </div>
        </Marquee>
      </article>
    </section>
  );
}
