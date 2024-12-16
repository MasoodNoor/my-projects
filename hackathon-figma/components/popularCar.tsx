import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import CarCards3 from "./carCards3";
import CarCards4 from "./carCards4";
import { CarouselDemo } from "./myCarousel";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

function PopularCar() {
  return (
    <main className="w-full px-8 py-6">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="w-[327px] h-[20px] sm:h-[44px] sm:w-[132px]">
            <p
              className={`${plusJakartaSans.className}  h-[24px]  text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-left text-[#90A3BF]`}
            >
              Popular Car
            </p>
          </div>
          <div className="h-[44px] w-[132px] inline-flex justify-center items-center ">
            <p
              className={`${plusJakartaSans.className}  h-[24px]  text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-left text-[#3563E9]`}
            >
              View All
            </p>
          </div>
        </div>
        <div className="px-4 w-full sm:hidden">
          
          <CarouselDemo/>
        </div>

        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-x-6 sm:gap-y-6  w-[100%]  hidden">
          <CarCard />
          <CarCards2 />
          <CarCards3 />
          <CarCards4 />
        </div>
      </div>
    </main>
  );
}

export default PopularCar;
