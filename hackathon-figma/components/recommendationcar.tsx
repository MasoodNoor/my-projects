import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import CarCards3 from "./carCards3";
import CarCards4 from "./carCards4";
import { Button } from "./ui/button";

function RecommendationCar() {
  return (
    <main>
      <div className="w-full h-full sm:h-full py-[20px] sm:py-[10px] px-8">
        <div className="w-auto h-auto pb-[20px] pt-[31px] flex justify-start items-start">
          <p className=" sm:h-[44px] font-plusJakarta font-semibold text-left text-[16px] leading-4 text-[#90A3BF]">
            Recommendation Car
          </p>
        </div>

        <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">
          <CarCard />
          <CarCards2 />
          <CarCards3 />
          <CarCards4 />
          <CarCards2 />
          <CarCards4 />
          <CarCard />
          <CarCards3 />
        </div>
        <div className="sm:w-[100%] sm:h-[44px] flex items-center justify-between pt-8 py-10 sm:py-20 px-4">
          <div></div>
          <Button className="  bg-[#3563E9] px-[20px] sm:rounded-[4px] inline-flex items-center justify-center ">
            <p className="inline-flex items-center justify-center sm:w-[116px] sm:h-[24px] text-[#FFFFFF] font-plusJakarta font-semibold text-[14px] sm:text-[16px] leading-4 text-center">
              Show more car
            </p>
          </Button>
          <div className=" flex justify-start items-center">
            <p className="font-plusJakarta font-medium text-[14px] text-[#90A3BF] ">
              120 cars
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecommendationCar;
