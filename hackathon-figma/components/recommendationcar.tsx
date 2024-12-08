import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";

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
        <div className="grid grid-cols-4 gap-x-1">
          <CarCard />
          <CarCards2 />
          <CarCard />
          <CarCards2 />

          <CarCard />
          <CarCards2 />
        </div>
      </div>
    </main>
  );
}

export default RecommendationCar;
