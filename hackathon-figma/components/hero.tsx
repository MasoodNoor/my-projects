import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 w-full">
      <div className="bg-[#54A6FF] md:h-[360px] md:p-6 rounded-[10px] p-4 flex flex-col gap-2 w-full h-full">
        <div className="w-[300px] md:w-[284px] flex flex-col flex-wrap gap-4">
          <h3 className="text-white font-plusJakarta text-[16px] md:text-[32px] font-semibold  tracking-[-3%] md:h-[96px]  title-font">
            The Best Platform for Car Rental
          </h3>
          <p className="text-white font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-5 w-[216px] md:w-[284px]">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Button className="bg-[#3563E9] w-[128px] h-[44px] rounded-[4px] px-[20px]">
            <p className="font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-4 tracking-[-2%] text-center">
              Rental Car
            </p>
          </Button>
        </div>

        <div className="relative ml-[37px] md:ml-[40px] lg:ml-[90px] md:mt-[10px] lg:mt-[-22px]">
          <Image
            alt="NextUI Fruit Image with Zoom"
            src="/car-images/lg-carimg-2.png"
            width={406}
            height={116}
            className=""
          />
        </div>
      </div>
      <div className="bg-[#3563E9] h-[232px] md:h-[360px] md:p-6 rounded-[10px] p-4 md:flex flex-col gap-2 w-full hidden">
        <div className="w-[300px] md:w-[284px] flex flex-col flex-wrap gap-4">
          <h3 className="text-white font-plusJakarta text-[16px] md:text-[32px] font-semibold  tracking-[-3%] md:h-[96px]  title-font">
            Easy way to rent a car at a low price
          </h3>
          <p className="text-white font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-5 w-[216px] md:w-[284px]">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Button className="bg-[#54A6FF] hover:bg-blue-500 w-[128px] h-[44px] rounded-[4px] px-[20px]">
            <p className="font-plusJakarta font-semibold text-[12px] md:text-[16px] leading-4 tracking-[-2%] text-center">
              Rental Car
            </p>
          </Button>
        </div>

        <div className=" relative ml-[37px] md:ml-[60px] lg:ml-[130px] lg:mt-[-22px]">
          <Image
            alt="NextUI Fruit Image with Zoom"
            src="/car-images/lg-carimg-1.png"
            width={340}
            height={108}
            className=""
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
