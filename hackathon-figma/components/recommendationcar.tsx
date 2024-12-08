import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import CarCards3 from "./carCards3";
import CarCards4 from "./carCards4";
import CarCard5 from "./carCards5";
import CarCards6 from "./carCards6";
import CarCards7 from "./carCards7";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

function RecommendationCar() {
  return (
    <main className="">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="h-[44px] w-[202px] inline-flex justify-center items-center ">
            <p
              className={`${plusJakartaSans.className}h-[24px] text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-left text-[#90A3BF] `}
            >
              Recommendation Car
            </p>
          </div>
          {/* <div className="h-[44px] w-[132px] inline-flex justify-center items-center ">
            <p
              className={`${plusJakartaSans.className}  h-[24px]  text-[16px] font-medium leading-[20px] tracking-[-0.03em] text-left text-[#3563E9]`}
            >
              View All
            </p>
          </div> */}
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-6">
          <CarCard />
          <CarCards2 />
          <CarCards3 />
          <CarCards4 />
          <CarCard5 />
          <CarCards6 />
          <CarCards7 />
          <CarCards3 />
        </div>
      </div>
    </main>
  );
}

export default RecommendationCar;
