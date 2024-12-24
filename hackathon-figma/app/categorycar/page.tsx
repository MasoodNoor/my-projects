import RecommandCar from "../../components/reCars";
import MyCheckbox from "@/components/mycheckbox";
import Pickswitchdrop from "@/components/pickswitchdrop";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="bg-[#F6F7F9] grid grid-cols-[2fr_10fr] overflow-auto">
     
      <aside className="md:border border-r-[#F3F5F7] p-4 bg-white hidden md:block">
        <div>
          <MyCheckbox />
        </div>
      </aside>
      <aside className="">
        <div className="w-fit">
        <Pickswitchdrop/>
        </div>
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-y-4 sm:gap-x-3 sm:gap-y-6 px-8 w-full">
        <RecommandCar
                  name="Koenigsegg"
                  type="Sport"
                  fuel="90L"
                  capacity="2 People"
                  price="$99.00"
            imageSrc="/car-images/carimg-1.png"
            isFavorited={true}
          />
          <RecommandCar
                  name="Nissan GT - R"
                  type="Sport"
                  fuel="80L"
                  capacity="2 People"
                  price="$80.00"
            imageSrc="/car-images/carimg-2.png"
            oldPrice="$100.00"
          />
          <RecommandCar
                  name="Rolls - Royce"
                  type="Sedan"
                  fuel="70L"
                  capacity="4 People"
                  price="$96.00"
            imageSrc="/car-images/carimg-3.png"
            isFavorited={true}
            
          />
          <RecommandCar
            name="All New Rush"
            type="SUV"
            fuel="70L"
            capacity="6 People"
            price="$72.00"
            imageSrc="/car-images/carimg-4.png"
            oldPrice="$80.00"
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
            oldPrice="$80.00"
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
          
        </div>
        <div className="flex items-center justify-between px-8 py-10 relative">
          <div></div>
          <Button className="  bg-[#3563E9] `sm:px-[20px] sm:rounded-[4px] inline-flex items-center justify-center ">
            <p className="inline-flex items-center justify-center  text-[#FFFFFF] font-plusJakarta font-semibold text-[14px] sm:text-[16px] leading-4 text-center">
              Show more car
            </p>
          </Button>
          <div className="inline-flex justify-end items-end">
            <p className="font-plusJakarta font-medium text-[14px] text-[#90A3BF]">
              120 cars
            </p>
          </div>
          </div>
      </aside>

      {/* <div className="">
        <div className="">
          <Pickswitchdrop/>
        </div>
        
        
        </div>
      </div> */}
    </div>
  );
}

export default page;
