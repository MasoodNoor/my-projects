"use client"
// import Image from "next/image";
// function CarGallery() {
//   return (
//     <div className="flex flex-col gap-4 ">
//       <div className="bg-[#3563E9]  md:p-6 rounded-[10px] p-4 flex flex-col gap-8 w-[327px] lg:w-full h-full">
//         <div className="w-[240px]lg:w-[372px] flex flex-col flex-wrap gap-4">
//           <h3 className="text-white font-plusJakarta text-[16px] md:text-[32px] font-semibold  tracking-[-3%] md:h-[96px]  title-font">
//             Sports car with the best design and acceleration
//           </h3>
//           <p className="text-white font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-5 w-[216px] md:w-[284px]">
//             Safety and comfort while driving a futuristic and elegant sports car
//           </p>
//         </div>

//         <div className="relative inline-flex justify-center">
//           <Image
//             alt="Nissan GT - R"
//             src="/car-images/lg-carimg-1.png"
//             width={380}
//             height={108}
//             className=""
//           />
//         </div>
//       </div>
//       <div className="flex justify-between items-center w-full h-full">
//         <div className="w-[96px] h-[80px] lg:w-[148px] lg:h-[124px] flex items-center justify-center bg-[#3563E9] rounded-[10px]">
//           <Image
//             alt="Nissan GT - R"
//             src="/car-images/lg-carimg-1.png"
//             width={116}
//             height={36}
//             className=""
//           />
//         </div>
//         <div className="w-[96px] lg:w-[148px] lg:h-[124px] rounded-[10px]">
//           <Image
//             alt="Nissan GT - R"
//             src="/car-images/carinside-1.png"
//             width={148}
//             height={124}
//             className=""
//           />
//         </div>
//         <div className="w-[96px] lg:w-[148px] lg:h-[124px] rounded-[10px]">
//           <Image
//             alt="Nissan GT - R"
//             src="/car-images/carinside-2.png"
//             width={148}
//             height={124}
//             className=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarGallery;





import { useState } from "react";

function CarGallery() {
  const [mainImage, setMainImage] = useState("/car-images/lg-carimg-1.png");
  
  return (
    <div className="flex flex-col gap-4 w-full">
      <div 
        className="p-4 md:p-6 rounded-[10px] rounded-b-[25px]  flex flex-col gap-8 w-[327px] h-[232px] lg:w-[492px] lg:h-[360px] bg-[#3563E9]"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: mainImage === "/car-images/lg-carimg-1.png" ? 'contain' : 'cover'
        }}
      >
        <div className="w-[240px] lg:w-[372px] flex flex-col flex-wrap gap-4">
          <h3 className="text-white font-plusJakarta text-[16px] md:text-[32px] font-semibold tracking-[-3%] md:h-[96px] title-font">
            Sports car with the best design and acceleration
          </h3>
          <p className="text-white font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-5 w-[216px] md:w-[284px]">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-between items-center w-[328px] h-[64px] lg:w-[492px] lg:h-[124px]">
        {/* Car thumbnail */}
        <div 
          onClick={() => setMainImage("/car-images/lg-carimg-1.png")}
          className={`w-[96px] h-[80px] lg:w-[148px] lg:h-[124px] bg-[#3563E9] rounded-[10px] cursor-pointer flex items-center justify-center ${
            mainImage === "/car-images/lg-carimg-1.png" ? 'ring-2 ring-white' : ''
          }`}
        >
          <div 
            className="w-[80%] h-[80%] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(/car-images/lg-carimg-1.png)` }}
          />
        </div>

        {/* Interior thumbnails */}
        <div 
          onClick={() => setMainImage("/car-images/carinside-1.png")}
          className={`w-[96px] h-[80px] lg:w-[148px] lg:h-[124px]  cursor-pointer overflow-hidden ${
            mainImage === "/car-images/carinside-1.png" ? 'ring-2 ring-[#3563E9]' : ''
          }`}
        >
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(/car-images/carinside-1.png)` }}
          />
        </div>

        <div 
          onClick={() => setMainImage("/car-images/carinside-2.png")}
          className={`w-[96px] h-[80px] lg:w-[148px] lg:h-[124px]  cursor-pointer overflow-hidden ${
            mainImage === "/car-images/carinside-2.png" ? 'ring-2 ring-[#3563E9]' : ''
          }`}
        >
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(/car-images/carinside-2.png)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarGallery;