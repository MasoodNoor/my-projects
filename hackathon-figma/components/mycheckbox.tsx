import { Checkbox } from "@nextui-org/checkbox";

export default function MyCheckbox() {
  return (
    <div>
      <div className="w-[176px] h-[352px] flex flex-col gap-[20px]">
        <p className="w-[104px] h-[20px] font-plusJakarta font-semibold text-[12] leading-[16px] text-[#90A3BF] ">
          TYPE
        </p>
        <div className="w-[176px] h-[304px] flex flex-col gap-[20px]">
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
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Hatchback <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
        </div>
      </div>
      <div className="w-[176px] h-[352px] flex flex-col gap-[20px]">
        <p className="w-[104px] h-[20px] font-plusJakarta font-semibold text-[12] leading-[16px] text-[#90A3BF] ">
          CAPACITY
        </p>
        <div className="w-[176px] h-[304px] flex flex-col gap-[20px]">
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
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Coupe <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
          <Checkbox>
            <p className="font-plusJakarta font-semibold text-[20px] text-[#596780] leading-[30px] text-justify">
              Hatchback <span className="text-[#90A3BF]">(14)</span>
            </p>
          </Checkbox>
        </div>
      </div>
      <div></div>
    </div>
  );
}
