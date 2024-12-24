import CarCard from "@/components/carCard";
import CarGallery from "@/components/carGallery";
import CustomerReview from "@/components/customerReview";
import DetailComponent from "@/components/detailComponent";
import { CarouselDemo } from "@/components/myCarousel";
import MyCheckbox from "@/components/mycheckbox";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function DetailCar() {
  return (
    <div className="bg-[#E3E3E3] grid grid-cols-[2fr_10fr] gap-x-2 overflow-auto w-full ">
      <aside className="md:border border-r-[#F3F5F7] p-4 bg-white hidden md:block">
        <div>
          <MyCheckbox />
        </div>
      </aside>
      <aside className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] p-4 md:px-2 gap-y-8 w-full">
          <div className="px-3">
            <CarGallery />
          </div>
          <div className="px-3 w-fit h-fit">
            <DetailComponent
              name="Nissan GT - R"
              stars={4}
              reviewers="440+"
              review='NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the "race track ".'
              type="Sport"
              fuel="70L"
              capacity="2 People"
              price="$80.00"
              oldPrice="$100.00"
            />
          </div>
        </div>
        <div className="flex items-center py-4 px-3">
          <CustomerReview />
        </div>
        <div>
          <div className="flex justify-between items-center p-6">
            <div className="">
              <p className="font-plusJakarta h-[24px] text-[14px] md:text-[16px] font-semibold leading-[20px] tracking-[-0.03em] text-left text-[#90A3BF]">
                Recent Car
              </p>
            </div>
            <div className="inline-flex justify-center items-center ">
              <p className="font-plusJakarta h-[24px] text-[14px] md:text-[16px] font-semibold leading-[20px] tracking-[-0.03em] text-left text-[#3563E9]">
                <Link href="/categorycar">View All</Link>
              </p>
            </div>
          </div>
          <div className="w-[35%] sm:hidden">
          <CarouselDemo />
        </div>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 place-items-center py-4 px-3 hidden">
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
              oldPrice="$100.00"
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
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-6">
            <div className="">
              <p className="font-plusJakarta h-[24px] text-[14px] md:text-[16px] font-semibold leading-[20px] tracking-[-0.03em] text-left text-[#90A3BF]">
                Recomendation Car
              </p>
            </div>
            <div className="inline-flex justify-center items-center ">
              <p className="font-plusJakarta h-[24px] text-[14px] md:text-[16px] font-semibold leading-[20px] tracking-[-0.03em] text-left text-[#3563E9]">
                <Link href="/categorycar">View All</Link>
              </p>
            </div>
          </div>
          <div className="w-[35%] sm:hidden">
          <CarouselDemo />
        </div>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 place-items-center py-4 px-3 hidden">
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
              oldPrice="$100.00"
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
          </div>
        </div>
      </aside>
    </div>
  );
}

export default DetailCar;
