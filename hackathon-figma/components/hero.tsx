// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// function Hero() {
//   return (
//     <main className="bg-[#F6F7F9]  px-[24px] sm:pt-[32px] sm:px-[30px] w-full">
//       <div className="flex sm:gap-[22px]">
//         <div className="w-[327px] h-[232px] sm:py-2 sm:w-[160px] sm:h-[180px] md:w-[320px] md:h-[360px] lg:w-[640px] lg:h-[360px] rounded-[10px] bg-[#54A6FF] -mt-[100px] sm:-mt-0">
//           <div className="w-[240px] h-[70px] py-[16px] px-[16px] sm:w-[284px] sm:h-[224px] sm:pt-[24px] sm:pl-[24px] flex flex-col items-start gap-[12px] sm:gap-[16px]">
//             <p className=" font-plusJakarta w-[240px] h-[20px] sm:w-[272px] sm:h-[96px] text-[16px] sm:text-[32px] font-semibold leading-[24px] sm:leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]">
//               The Best Platform for Car Rental
//             </p>
//             <p className="font-plusJakarta w-[216px] h-[38px] sm:w-[284px] sm:h-[48px] text-[12px] sm:text-[16px] font-medium leading-[19.2px] sm:leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]">
//               Ease of doing a car rental safely and reliably. Of course at a low
//               price.
//             </p>
//             <div>
//               <Button className="font-plusJakarta w-[128px] h-[44px] p-[20px]  sm:w-[120px] sm:h-[44px] px-[20px] sm:py-0  rounded-[4px] bg-[#3563E9] text-white inline-flex items-center justify-center">
//                 <p className="sm:w-[80px] sm:h-[24px] s:h-text-[12px] sm:text-[16px] font-semibold ">
//                   Rental Car
//                 </p>
//               </Button>
//             </div>
//           </div>
//           <div className="">
//             <Image
//               className="w-[196px] sm:w-[406px] ml-[60px] mt-[65px] sm:ml-[140px] sm:-mt-[50px]"
//               src="/car-images/carimg-1.png" // Image path relative to the 'public' folder
//               alt="car image" // Descriptive alt text for the image
//               width={406} // Set the width of the image (smaller than the parent to fit inside)
//               height={116} // Set the height of the image
//               // Optional: makes the image rounded (for a circular effect)
//             />
//           </div>
//         </div>
//         <div className="w-[640px] h-[360px]  rounded-[10px] bg-[#3563E9] hidden sm:block">
//           <div className="w-[290px]  pt-[24px] pl-[24px] flex flex-col gap-[20px]">
//             <div className="font-plusJakarta h-[96px] text-[32px] font-semibold leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]">
//               Easy way to rent a car at a low price
//             </div>
//             <p className="font-plusJakarta w-full text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]">
//               Providing cheap car rental services and safe and comfortable
//               facilities.
//             </p>
//             <Button className="font-plusJakarta w-[128px] h-[44px] p-[20px]  sm:w-[120px] sm:h-[44px] sm:py-0  rounded-[4px] bg-[#54A6FF] text-white inline-flex items-center justify-center">
//               <p className="sm:w-[80px] sm:h-[24px] s:h-text-[12px] sm:text-[16px] font-semibold ">
//                 Rental Car
//               </p>
//             </Button>
//           </div>
//           <Image
//             className="ml-[180px] -mt-[90px]"
//             src="/car-images/carimg-2.png" // Image path relative to the 'public' folder
//             alt="Avatar" // Descriptive alt text for the image
//             width={340} // Set the width of the image (smaller than the parent to fit inside)
//             height={108} // Set the height of the image
//             // Optional: makes the image rounded (for a circular effect)
//           />
//         </div>
//       </div>
//       {/* <Pickswitchdrop />
//       <PopularCar />
//       <RecommendationCar/> */}
//     </main>
//   );
// }

// export default Hero;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Hero() {
  return (
    <main className="bg-[#F6F7F9] px-4 py-8 md:py-12 lg:px-8 ">
      <div className=" w-96 h-60 md:w-full md:h-[360px] grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* First Card - Mobile & Desktop */}
        <div className="relative bg-[#54A6FF] rounded-[10px] overflow-hidden  ">
          <div className="p-6  md:p-8 text-white space-y-2 md:space-y-4 relative z-10 md:w-[320px] ">
            <h2 className=" font-plusJakarta text-lg sm:text-xl md:text-3xl font-semibold">
              The Best Platform for Car Rental
            </h2>
            <p className={`${plusJakartaSans.className} text-sm md:text-base `}>
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Button className="bg-[#3563E9] hover:bg-[#2852C7] text-white p-6 rounded">
              Rental Car
            </Button>
          </div>
          <Image
            src="/car-images/carimg-1.png"
            alt="Car image"
            width={250}
            height={100}
            // className="absolute bottom-0 right-16 md:w-[70%] sm:right-1  object-contain"
            className="-mt-14 ml-12 md:-mt-28 md:ml-32 object-contain md:w-[70%]"
          />
        </div>

        {/* Second Card - Desktop Only */}
        <div className="hidden md:block bg-[#3563E9] rounded-[10px] relative overflow-hidden">
          <div className="p-8 text-white md:space-y-4 relative z-10">
            <h2
              className={`${plusJakartaSans.className} text-3xl font-semibold md:w-[272px]`}
            >
              Easy way to rent a car at a low price
            </h2>
            <p className={`${plusJakartaSans.className} text-base w-[60%]`}>
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Button className="bg-[#54A6FF] hover:bg-[#6AB4FF] text-white p-6 rounded">
              Rental Car
            </Button>
          </div>
          <Image
            src="/car-images/carimg-2.png"
            alt="Another car"
            width={350}
            height={100}
            className=" w-[60%] ml-40 -mt-32 object-contain"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
