import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Pickswitchdrop from "./pickswitchdrop";
import PopularCar from "./popularCar";
import RecommendationCar from "./recommendationcar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

function Hero() {
  return (
    <main className=" bg-[#F6F7F9] pt-[32px] px-[64px]">
      <div className="flex gap-[32px]">
        <div className="w-[640px] h-[360px]  rounded-[10px] bg-[#54A6FF]">
          <div className="w-[290px]  pt-[24px] pl-[24px] flex flex-col gap-[20px]">
            <div
              className={`${plusJakartaSans.className} h-[96px] text-[32px] font-semibold leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]`}
            >
              The Best Platform for Car Rental
            </div>
            <p
              className={`${plusJakartaSans.className} w-full text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]`}
            >
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Button
              className={`${plusJakartaSans.className} w-[120px] h-[44px] px-[20px] py-0  rounded-[4px] bg-[#3563E9] text-white`}
            >
              Rental Car
            </Button>
          </div>
          <Image
            className="ml-[137px] -mt-[70px]"
            src="/car-images/carimg-1.png" // Image path relative to the 'public' folder
            alt="car image" // Descriptive alt text for the image
            width={406} // Set the width of the image (smaller than the parent to fit inside)
            height={116} // Set the height of the image
            // Optional: makes the image rounded (for a circular effect)
          />
        </div>
        <div className="w-[640px] h-[360px]  rounded-[10px] bg-[#3563E9]">
          <div className="w-[290px]  pt-[24px] pl-[24px] flex flex-col gap-[20px]">
            <div
              className={`${plusJakartaSans.className} h-[96px] text-[32px] font-semibold leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]`}
            >
              Easy way to rent a car at a low price
            </div>
            <p
              className={`${plusJakartaSans.className} w-full text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]`}
            >
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Button
              className={`${plusJakartaSans.className} w-[120px] h-[44px] px-[20px] py-0  rounded-[4px] bg-[#54A6FF] text-white`}
            >
              Rental Car
            </Button>
          </div>
          <Image
            className="ml-[180px] -mt-[90px]"
            src="/car-images/carimg-2.png" // Image path relative to the 'public' folder
            alt="Avatar" // Descriptive alt text for the image
            width={340} // Set the width of the image (smaller than the parent to fit inside)
            height={108} // Set the height of the image
            // Optional: makes the image rounded (for a circular effect)
          />
        </div>
      </div>
      <Pickswitchdrop />
      <PopularCar />
      
    </main>
  );
}

export default Hero;
