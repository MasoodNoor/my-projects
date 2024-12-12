import { Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";

export default function MyCheckbox() {
  return (
    <div>
      <div className=" flex flex-col sm:gap-[20px] sm:pl-[15px]">
        <p className=" sm:pb-[28px] font-plusJakarta font-semibold text-[12] leading-[16px] text-[#90A3BF] ">
          TYPE
        </p>
        <div className=" sm:pl-[4px] flex flex-col  gap-[20px]">
          <Checkbox defaultSelected>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Sport <span className="text-[#90A3BF]">(10)</span>
            </p>
          </Checkbox>
          <Checkbox defaultSelected>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              SUV <span className="text-[#90A3BF]">(12)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              MPV <span className="text-[#90A3BF]">(16)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Sedan <span className="text-[#90A3BF]">(20)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Coupe <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="sm:w-[144px]font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Hatchback <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
        </div>
      </div>
      <div className=" flex flex-col gap-[20px] sm:pl-[15px]">
        <p className=" sm:py-[28px] font-plusJakarta font-semibold text-[12] leading-[16px] text-[#90A3BF] ">
          CAPACITY
        </p>
        <div className=" sm:pl-[4px] flex flex-col gap-[20px]">
          <Checkbox defaultSelected>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              2 Person <span className="text-[#90A3BF]">(10)</span>
            </p>
          </Checkbox>
          <Checkbox defaultSelected>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              4 Person <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              6 Person <span className="text-[#90A3BF]">(12)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              8 or More <span className="text-[#90A3BF]">(16)</span>
            </p>
          </Checkbox>
        </div>
        <div className=" flex flex-col sm:gap-[20px] ">
          <p className=" sm:py-[28px] font-plusJakarta font-semibold text-[12] leading-[16px] text-[#90A3BF]  ">
            PRICE
          </p>

          <div className="">
            <Slider
              className=""
              defaultValue={40}
              formatOptions={{ style: "currency", currency: "USD" }}
              showTooltip={true}
              tooltipValueFormatOptions={{ style: "currency", currency: "USD" }}
              classNames={{
                base: "w-[296px] h-[12px]",
                track: "bg-[#90A3BF]",
                filler: "bg-[#3563E9] rounded-l-full",
                thumb: "bg-white border-4 bg-[#3563E9] mt-[6px]",
              }}
            />
            <div>
              <p className="h-[24px] font-semibold text-[20px] leading-[30px] text-[#596780]">
                Max. $100.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
