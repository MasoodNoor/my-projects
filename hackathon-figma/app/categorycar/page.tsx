import CarCard from "@/components/carCards";
import CarCards2 from "@/components/carCards2";
import CarCards3 from "@/components/carCards3";
import CarCards4 from "@/components/carCards4";
import MyCheckbox from "@/components/mycheckbox";
import Pickswitchdrop from "@/components/pickswitchdrop";
import { Button } from "@/components/ui/button";





function page() {
  return (
    <div className="bg-[#F6F7F9]">
      <aside className="w-[360px] h-[1600px] sm:border border-r-[#F3F5F7] p-4 bg-white hidden sm:block">
        <MyCheckbox/>
      </aside>

      <div>
        <Pickswitchdrop />
        
      </div>
      <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-4 gap-y-4 sm:gap-x-3 sm:gap-y-6 px-12 sm:px-0">
        <CarCard />
        <CarCards2 />
        <CarCards3 />
        <CarCards4 />
        <CarCards2 />
        <CarCards4 />
        <CarCard />
      </div>
      <div className="sm:w-[100%] sm:h-[44px] flex items-center justify-between pt-8 py-10 sm:py-20">
        <div></div>
        <Button className=" sm:w-[156px] sm:h-[44px] bg-[#3563E9] `sm:px-[20px] sm:rounded-[4px] inline-flex items-center justify-center ">
          <p className="inline-flex items-center justify-center sm:w-[116px] sm:h-[24px] text-[#FFFFFF] font-plusJakarta font-semibold text-[14px] sm:text-[16px] leading-4 text-center">
            Show more car
          </p>
        </Button>
        <div className="sm:w-[140px] sm:h-[24px] inline-flex justify-end items-end">
          <p className="font-plusJakarta font-medium text-[14px] text-[#90A3BF]">
            120 cars
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
