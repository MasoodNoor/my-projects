import { Button } from "@/components/ui/button";

interface DetailCarProps {
  name: string;
  stars: number;
  review: string;
  reviewers: string;
  type: string;
  fuel: string;
  capacity: string;
  price: string;
  oldPrice?: string;
  isFavorited?: boolean;
}
const DetailComponent = ({
  name,
  stars,
  review,
  reviewers,
  type,
  fuel,
  capacity,
  price,
  oldPrice,
  isFavorited,
}: DetailCarProps) => {
  return (
    <div>
      <div className="bg-[#FFFFFF] p-4 md:p-5 w-[327px] sm:w-full flex flex-col gap-8 lg:gap-10">
        <div className="flex justify-between">
          <h1 className=" md:w-full h-full font-plusJakarta font-bold text-[20px] lg:font-[32px] text-[#1A202C]">
            {name}
          </h1>
          <span className="md:flex justify-center items-center hidden ">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                fill="#ED3F3F"
              />
            </svg>
          </span>
        </div>
        <div className="flex gap-3 items-center -mt-8">
          <div className="flex space-x-1 ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="18"
                height="16"
                viewBox="0 0 18 16"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  index < stars
                    ? "fill-[#FBAD39]"
                    : "fill-none stroke-[#90A3BF]"
                }`}
              >
                <path d="M8.167 0.658a0.865 0.865 0 011.692 0l1.55 4.767h5a0.866 0.866 0 01.509 1.558l-4.058 3.043 1.55 4.766a0.865 0.865 0 01-1.332.963L9 12.842l-4.058 3.043a0.865 0.865 0 01-1.332-.963l1.55-4.766L1.1 6.982a0.866 0.866 0 01.509-1.558h5L8.167.658z" />
              </svg>
            ))}
          </div>
          <div className="font-plusJakarta text-[#596780] text-[12px] lg:font-medium lg:text-[14px]">
            {reviewers} Reviewer
          </div>
        </div>
        <div className="text-[#596780] text-[12px] lg:text-[18px] text-left leading-[200%] align-top">
          {review}
        </div>
        <div className="grid grid-rows-2 grid-cols-4 gap-x-2 lg:pb-[54px]">
          <div className="font-plusJakarta text-[12px] lg:text-[18px] font-medium text-[#90A3BF] ">
            Type Car
          </div>
          <div className="font-plusJakarta text-right text-[12px] lg:text-[18px] font-semibold text-[#596780] flex items-center justify-center pl-2 md:pl-4">
            {type}
          </div>
          <div className="font-plusJakarta text-[12px] lg:text-[18px] font-medium text-[#90A3BF] flex items-center justify-center">
            Capacity
          </div>
          <div className="font-plusJakarta text-[12px] text-right lg:text-[18px] font-semibold text-[#596780]">
            {capacity}
          </div>
          <div className="font-plusJakarta text-[12px] lg:text-[18px] font-medium text-[#90A3BF]">
            Steering
          </div>
          <div className="font-plusJakarta text-[12px] text-right lg:text-[18px] font-semibold text-[#596780] flex items-center justify-center">
            Manual
          </div>
          <div className="font-plusJakarta text-[12px] lg:text-[18px] font-medium text-[#90A3BF] flex items-center justify-center">
            Gasoline
          </div>
          <div className="font-plusJakarta text-[12px] text-right lg:text-[18px] font-semibold text-[#596780]">
            {fuel}
          </div>
        </div>
        <div className="flex justify-between items-center gap-2  w-full">
          <div className="font-base font-bold text-[18px] lg:text-[28px] font-plusJakarta">
            {price}/
            <span className="font-bold text-[12px] sm:text-[14px] lg:text-[16px]  font-plusJakarta text-[#90A3BF]">
              &nbsp;day
            </span>
            <span>
              <p className="font-bold text-[12px] sm:text-[14px] line-through font-plusJakarta text-[#90A3BF] ">
                {oldPrice}
              </p>
            </span>
          </div>
          <div>
            <Button className=" h-[56px] w-[140px] rounded-[4px] bg-[#3563E9] text-white font-plusJakarta text-[16px] leading-[24px] text-center">
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
