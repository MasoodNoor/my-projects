import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  name: string;
  type: string;
  fuel: string;
  capacity: string;
  price: string;
  imageSrc: string;
  imageWidth?: number;
  oldPrice?: string;
  isFavorited?: boolean;
}

const CarCard = ({
  name,
  type,
  imageSrc,
  imageWidth,
  fuel,
  capacity,
  price,
  oldPrice,
  isFavorited,
}: CarCardProps) => {
  return (
    <div className="bg-white rounded-[10px] shadow-md overflow-hidden p-4  w-full h-full ">
      <div className=" flex justify-between items-center">
        <h3 className="text-base font-semibold sm:text-xl sm:bold font-plusJakarta">
          {name}
        </h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
            fill={isFavorited ? "#ED3F3F" : "none"}
            stroke={isFavorited ? "none" : "#90A3BF"}
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="">
        <p className="text-sm  font-medium sm:font-bold text-[#90A3BF] font-plusJakarta">
          {type}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-4 place-items-center pb-10 sm:pt-8 ">
        <div className="h-[140px] flex items-end">
          <Image
            className={`${imageWidth} sm:w-[300px]`}
            src={imageSrc}
            alt={`${name} ${type}`}
            width={200}
            height={200}
          />
          <div className="shadow-box absolute"></div>
        </div>

        <div className="flex justify-around sm:justify-between sm:items-center w-full ">
          <div className="flex justify-start items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[24px] sm:h-[24px]"
            >
              <path
                d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z"
                fill="#90A3BF"
              />
            </svg>
            <p className="font-medium text-[12px] sm:text-[14px] leading-[15px] sm:leading-[21px] text-[#90A3BF] font-plusJakarta">
              {fuel}
            </p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[24px] sm:h-[24px]"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                fill="#90A3BF"
              />
              <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
              <path
                d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                fill="#90A3BF"
              />
              <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
              <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
              <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
              <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
            </svg>

            <p className="font-medium text-[12px] sm:text-[14px] leading-[15px] sm:leading-[21px] text-[#90A3BF] font-plusJakarta">
              Manual
            </p>
          </div>

          <div className="flex justify-start items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[24px] sm:h-[24px]"
            >
              <path
                d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                fill="#90A3BF"
              />
              <path
                d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z"
                fill="#90A3BF"
              />
              <path
                d="M19.9904 7.3401C20.1504 9.2801 18.7704 10.9801 16.8604 11.2101C16.8504 11.2101 16.8504 11.2101 16.8404 11.2101H16.8104C16.7504 11.2101 16.6904 11.2101 16.6404 11.2301C15.6704 11.2801 14.7804 10.9701 14.1104 10.4001C15.1404 9.4801 15.7304 8.1001 15.6104 6.6001C15.5404 5.7901 15.2604 5.0501 14.8404 4.4201C15.2204 4.2301 15.6604 4.1101 16.1104 4.0701C18.0704 3.9001 19.8204 5.3601 19.9904 7.3401Z"
                fill="#90A3BF"
              />
              <path
                d="M21.9902 16.5904C21.9102 17.5604 21.2902 18.4004 20.2502 18.9704C19.2502 19.5204 17.9902 19.7804 16.7402 19.7504C17.4602 19.1004 17.8802 18.2904 17.9602 17.4304C18.0602 16.1904 17.4702 15.0004 16.2902 14.0504C15.6202 13.5204 14.8402 13.1004 13.9902 12.7904C16.2002 12.1504 18.9802 12.5804 20.6902 13.9604C21.6102 14.7004 22.0802 15.6304 21.9902 16.5904Z"
                fill="#90A3BF"
              />
            </svg>

            <p className=" font-medium text-[12px] sm:text-[14px] leading-[15px] sm:leading-[21px] text-[#90A3BF] font-plusJakarta">
              {capacity}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2  w-full">
        <div className="font-base font-bold font-plusJakarta">
          {price}/
          <span className="font-bold text-[12px] sm:text-[14px] font-plusJakarta text-[#90A3BF]">
            &nbsp;day
          </span>
          <span>
            <p className="font-bold text-[12px] sm:text-[14px] line-through font-plusJakarta text-[#90A3BF] ">
              {oldPrice}
            </p>
          </span>
        </div>
        <div>
          <Button className=" rounded-[4px] bg-[#3563E9] text-white font-plusJakarta text-[12px] sm:text-[16px] leading-[24px] text-center">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
