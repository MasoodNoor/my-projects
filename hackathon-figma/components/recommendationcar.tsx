
import Link from "next/link";
import RecommandCar from "./reCars";

import { Button } from "./ui/button";

function RecommendationCar() {
  return (
    <main>
      <div className="w-full h-full sm:h-full  sm:py-[10px] px-8">
        <div className="w-auto h-auto pb-[20px] pt-[31px] flex justify-start items-start">
          <p className=" sm:h-[44px] font-plusJakarta font-semibold text-left text-[16px] leading-4 text-[#90A3BF]">
            Recommendation Car
          </p>
        </div>

        <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">
          <RecommandCar
            name="All New Rush"
            type="SUV"
            fuel="70L"
            capacity="6 People"
            price="$72.00"
            imageSrc="/car-images/carimg-4.png"
            discountPrice="$80.00"
          />
          <RecommandCar
            name="CR  - V"
            type="SUV"
            fuel="80L"
            capacity="6 People"
            price="$80.00"
            imageSrc="/car-images/carimg-5.png"
            isFavorited={true}
          />
          <RecommandCar
            name="All New Terios"
            type="SUV"
            fuel="90L"
            capacity="6 People"
            price="$74.00"
            imageSrc="/car-images/carimg-6.png"
          />
          <RecommandCar
            name="CR  - V"
            type="SUV"
            fuel="80L"
            capacity="6 People"
            price="$80.00"
            imageSrc="/car-images/carimg-8.png"
            isFavorited={true}
          />
          <RecommandCar
            name="MG ZX Exclusice"
            type="Hatchback"
            fuel="70L"
            capacity="4 People"
            price="$76.00"
            imageSrc="/car-images/carimg-9.png"
            discountPrice="$80.00"
            isFavorited={true}
          />
          <RecommandCar
            name="New MG ZS"
            type="SUV"
            fuel="80L"
            capacity="6 People"
            price="$80.00"
            imageSrc="/car-images/carimg-7.png"
          />
          <RecommandCar
            name="MG ZX Exclusice"
            type="Hatchback"
            fuel="70L"
            capacity="4 People"
            price="$76.00"
            imageSrc="/car-images/carimg-9.png"
            discountPrice="$80.00"
            isFavorited={true}
          />
          <RecommandCar
            name="New MG ZS"
            type="SUV"
            fuel="80L"
            capacity="6 People"
            price="$80.00"
            imageSrc="/car-images/carimg-7.png"
          />
        </div>
        <div className="sm:w-[100%] sm:h-[44px] flex items-center justify-between pt-8 py-10 sm:py-20 px-4">
          <div></div>
          <Link href="/categorycar">
          <Button className="  bg-[#3563E9] px-[20px] sm:rounded-[4px] inline-flex items-center justify-center ">
            <p className="inline-flex items-center justify-center sm:w-[116px] sm:h-[24px] text-[#FFFFFF] font-plusJakarta font-semibold text-[14px] sm:text-[16px] leading-4 text-center">
              Show more car
            </p>
          </Button>
          </Link>
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
