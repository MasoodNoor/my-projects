import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import RecommendationCar from "./recommendationcar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

function PopularCar() {
  return (
    <main className="h-[1356px]">
      <div className="h-[452px]">
        <div className="flex justify-between items-center">
          <div className="h-[44px] w-[132px] inline-flex justify-center items-center ">
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
        <div className="grid grid-cols-4 gap-x-1">
          <CarCard />
          <CarCards2 />
          <CarCard />
          <CarCards2 />
        </div>
      </div>
      <RecommendationCar />
    </main>
  );
}

export default PopularCar;
