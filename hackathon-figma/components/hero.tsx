import { Button } from "@/components/ui/button";
import Image from "next/image";


function Hero() {
  return (
    <main className="bg-[#F6F7F9]  px-[24px] sm:pt-[32px] sm:px-[30px] w-full">
      <div className="flex sm:gap-[22px]">
        <div className="w-[327px] h-[232px] sm:py-2 sm:w-[160px] sm:h-[180px] md:w-[320px] md:h-[360px] lg:w-[640px] lg:h-[360px] rounded-[10px] bg-[#54A6FF] -mt-[100px] sm:-mt-0">
          <div className="w-[240px] h-[70px] py-[16px] px-[16px] sm:w-[284px] sm:h-[224px] sm:pt-[24px] sm:pl-[24px] flex flex-col items-start gap-[12px] sm:gap-[16px]">
            <p className=" font-plusJakarta w-[240px] h-[20px] sm:w-[272px] sm:h-[96px] text-[16px] sm:text-[32px] font-semibold leading-[24px] sm:leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]">
              The Best Platform for Car Rental
            </p>
            <p className="font-plusJakarta w-[216px] h-[38px] sm:w-[284px] sm:h-[48px] text-[12px] sm:text-[16px] font-medium leading-[19.2px] sm:leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <div>
              <Button className="font-plusJakarta w-[128px] h-[44px] p-[20px]  sm:w-[120px] sm:h-[44px] px-[20px] sm:py-0  rounded-[4px] bg-[#3563E9] text-white inline-flex items-center justify-center">
                <p className="sm:w-[80px] sm:h-[24px] s:h-text-[12px] sm:text-[16px] font-semibold ">
                  Rental Car
                </p>
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              className="w-[196px] sm:w-[406px] ml-[60px] mt-[65px] sm:ml-[140px] sm:-mt-[50px]"
              src="/car-images/carimg-1.png" // Image path relative to the 'public' folder
              alt="car image" // Descriptive alt text for the image
              width={406} // Set the width of the image (smaller than the parent to fit inside)
              height={116} // Set the height of the image
              // Optional: makes the image rounded (for a circular effect)
            />
          </div>
        </div>
        <div className="w-[640px] h-[360px]  rounded-[10px] bg-[#3563E9] hidden sm:block">
          <div className="w-[290px]  pt-[24px] pl-[24px] flex flex-col gap-[20px]">
            <div className="font-plusJakarta h-[96px] text-[32px] font-semibold leading-[48px] tracking-[-0.03em] text-left text-[#FFFFFF]">
              Easy way to rent a car at a low price
            </div>
            <p className="font-plusJakarta w-full text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#FFFFFF]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Button className="font-plusJakarta w-[128px] h-[44px] p-[20px]  sm:w-[120px] sm:h-[44px] sm:py-0  rounded-[4px] bg-[#54A6FF] text-white inline-flex items-center justify-center">
              <p className="sm:w-[80px] sm:h-[24px] s:h-text-[12px] sm:text-[16px] font-semibold ">
                Rental Car
              </p>
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
      {/* <Pickswitchdrop />
      <PopularCar />
      <RecommendationCar/> */}
    </main>
  );
}

export default Hero;
