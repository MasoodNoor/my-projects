import Image from "next/image";

function NavbarTop() {
  return (
    <div className="w-[375px] h-[288px] sm:h-[124px]   sm:w-full  border-t border-[#C3D4E966] bg-white   sm:flex   sm:items-center   sm:justify-between   sm:px-[60px]  ">
      {/* logo and search  for mobile*/}
      <div className="sm:flex sm:items-center sm:gap-[64px]">
        <div className="w-[327px] h-[28px] py-[32px] px-[25px] flex justify-between items-center gap-[191px] sm:hidden">
        <div className="w-[108px] h-[28px]   sm:w-[148px]   sm:h-[44px] text-[24px]   sm:text-[32px] font-bold leading-[36px] ms:pl-[25px] sm:py-[190px] sm:px-[25px]   sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9] font-plusJakarta sm:inline-flex sm:justify-center sm:items-center">
          MORENT
        </div>

          <Image
            src="/img-avatar.png" // Image path relative to the 'public' folder
            alt="Avatar" // Descriptive alt text for the image
            width={28} // Set the width of the image (  smaller than the parent to fit inside)
            height={28} // Set the height of the image
            className="rounded-[90px] w-[28px] h-[28px] "
          />
        </div>

        <div className="w-[108px] h-[28px]   sm:w-[148px]   sm:h-[44px] text-[24px]   sm:text-[32px] font-bold leading-[36px] ms:pl-[25px] sm:py-[190px] sm:px-[25px]   sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9] font-plusJakarta sm:inline-flex sm:justify-center sm:items-center hidden">
          MORENT
        </div>
        <div className="w-[263px] h-[48px] py-[35px] pl-[22px] sm:pt-[4px] sm:w-[492px] sm:h-[44px]  sm:block flex justify-between gap-3 sm:gap-6">
          <button className="w-[263px] h-[48px]  sm:w-[492px] sm:h-[44px] rounded-xl sm:rounded-[70px] border border-[#C3D4E966] bg-white flex justify-between items-center px-5">
            <div className="flex gap-6 pr-8">
              <svg
                className="w-[24px] h-[24px] text-[#596780]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#596780"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="w-[150px] font-plusJakarta font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-justify text-[#596780] ">
                Search something here
              </p>
            </div>

            <svg
              className="hidden sm:block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="md:hidden w-[48px] h-[48px] border inline-flex justify-center items-center border-[#C3D4E966] rounded-xl px-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#596780"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* notification  */}
      <div className="sm:w-[236px] sm:h-[44px] sm:flex sm:gap-[20px] hidden sd:block">
        <button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
              fill="#596780"
            />
          </svg>
        </button>
        <button className="w-[44px] h-[44px] rounded-[90px] border border-[#C3D4E966] opacity-[0.8] flex flex-col justify-center items-center">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF4423] absolute top-11 ml-8">
            {" "}
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
              fill="#596780"
            />
            <path
              d="M14.8299 20.01C14.4099 21.17 13.2999 22 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07C14.4999 20.05 14.6599 20.03 14.8299 20.01Z"
              fill="#596780"
            />
          </svg>
        </button>
        <button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] flex justify-center items-center">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1 19.2201C28.29 19.2201 27.55 17.9401 28.45 16.3701C28.97 15.4601 28.66 14.3001 27.75 13.7801L26.02 12.7901C25.23 12.3201 24.21 12.6001 23.74 13.3901L23.63 13.5801C22.73 15.1501 21.25 15.1501 20.34 13.5801L20.23 13.3901C19.78 12.6001 18.76 12.3201 17.97 12.7901L16.24 13.7801C15.33 14.3001 15.02 15.4701 15.54 16.3801C16.45 17.9401 15.71 19.2201 13.9 19.2201C12.86 19.2201 12 20.0701 12 21.1201V22.8801C12 23.9201 12.85 24.7801 13.9 24.7801C15.71 24.7801 16.45 26.0601 15.54 27.6301C15.02 28.5401 15.33 29.7001 16.24 30.2201L17.97 31.2101C18.76 31.6801 19.78 31.4001 20.25 30.6101L20.36 30.4201C21.26 28.8501 22.74 28.8501 23.65 30.4201L23.76 30.6101C24.23 31.4001 25.25 31.6801 26.04 31.2101L27.77 30.2201C28.68 29.7001 28.99 28.5301 28.47 27.6301C27.56 26.0601 28.3 24.7801 30.11 24.7801C31.15 24.7801 32.01 23.9301 32.01 22.8801V21.1201C32 20.0801 31.15 19.2201 30.1 19.2201ZM22 25.2501C20.21 25.2501 18.75 23.7901 18.75 22.0001C18.75 20.2101 20.21 18.7501 22 18.7501C23.79 18.7501 25.25 20.2101 25.25 22.0001C25.25 23.7901 23.79 25.2501 22 25.2501Z"
              fill="#596780"
            />
            <rect
              opacity="0.8"
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#C3D4E9"
              stroke-opacity="0.4"
            />
          </svg>
        </button>
        <div className="hidden sm:w-[44px] sm:h-[44px] sm:gap-0 sm:rounded-[90px] sm:border border-[#C3D4E966] opacity-[0.8] sm:flex sm:justify-center sm:items-center">
          <Image
            src="/img-avatar.png" // Image path relative to the 'public' folder
            alt="Avatar" // Descriptive alt text for the image
            width={44} // Set the width of the image (  smaller than the parent to fit inside)
            height={44} // Set the height of the image
            className="rounded-full" // Optional: makes the image rounded (for a circular effect)
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
