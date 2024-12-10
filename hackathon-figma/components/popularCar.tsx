import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import CarCards3 from "./carCards3";
import CarCards4 from "./carCards4";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

function PopularCar() {
  return (
    <main className="w-[327px] h-[286px] sm:w-full sm:h-[452px]">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="w-[327px] h-[20px] sm:h-[44px] sm:w-[132px]">
            <p
              className={`${plusJakartaSans.className}  h-[24px]  text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-left text-[#90A3BF] py-2`}
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
        <div className="flex justify-center items-center sm:hidden overflow-hidden">
          <CarCard />
        </div>

        <div className="sm:grid sm:grid-cols-4 sm:gap-x-7  hidden">
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
