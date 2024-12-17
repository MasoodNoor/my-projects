import { Plus_Jakarta_Sans } from "next/font/google";
import CarCard from "./carCard";

import { CarouselDemo } from "./myCarousel";
import Link from "next/link";

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
              <Link href="/categorycar">View All</Link>
            </p>
          </div>
        </div>
        <div className="px-4 sm:hidden">
          <CarouselDemo />
        </div>

        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-x-6 sm:gap-y-6  w-[100%]  hidden">
          <CarCard
            name="Koenigsegg"
            type="Sport"
            fuel="90L"
            capacity="2 People"
            price="$99.00"
            imageSrc="/car-images/carimg-1.png"
            isFavorited={true}
          />
          <CarCard
            name="Nissan GT - R"
            type="Sport"
            fuel="80L"
            capacity="2 People"
            price="$80.00"
            imageSrc="/car-images/carimg-2.png"
            discountPrice="$100.00"
          />
          <CarCard
            name="Rolls - Royce"
            type="Sedan"
            fuel="70L"
            capacity="4 People"
            price="$96.00"
            imageSrc="/car-images/carimg-3.png"
            isFavorited={true}
          />
          <CarCard
            name="Nissan GT - R"
            type="Sport"
            fuel="80L"
            capacity="2 People"
            price="$80.00"
            imageSrc="/car-images/carimg-2.png"
            discountPrice="$100.00"
          />
        </div>
      </div>
    </main>
  );
}

export default PopularCar;
