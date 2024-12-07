function TopHeader() {
  return (
    <div>
      <div className="bg-black w-[1440px] h-[48px] flex justify-center items-center gap-[231px] ">
        <div className="h-[24px] text-white flex gap-[8px] text-left">
          <p className="font-normal">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="font-semibold align-top text-center line leading-[24px] hover:underline underline-offset-2">
            ShopNow
          </p>
        </div>
        <div className="h-[24px] text-white flex gap-[5px] items-center">
          <p className="font-normal">English</p>
          <span className="h-[24px] w-[24px] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
