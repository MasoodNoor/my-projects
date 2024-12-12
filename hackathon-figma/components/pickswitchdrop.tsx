import { Plus_Jakarta_Sans } from "next/font/google";

// Import the Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Semibold
});

function Pickswitchdrop() {
  return (
    <main className=" flex flex-col sm:gap-3 md:flex-row justify-center items-center sm:items-center sm:justify-around py-3">
      {/* <div className="rounded-[10px] py-[24px] px-[32px] bg-white -ml-6 sm:-ml-0 flex flex-col justify-start items-start">
        <div className="w-[92px] h-[25px] flex flex-row  gap-2 pb-3 ">
          <div className="w-4 h-4 p-[4px] rounded-[70px] bg-[#3563E94D]">
            <div className="w-2 h-2 p-[2px] rounded-[70px] bg-[#3563E9]"></div>
          </div>
          <p
            className={`${plusJakartaSans.className} inline-flex items-center w-[68px] h-[20px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-[#1A202C]`}
          >
            Pick - Up
          </p>
        </div>
        <div className="w-[295px] h-[44px] sm:w-[486px] sm:h-[48px] flex sm:justify-between">
          <div className="sm-[126px] sm:h-[48px] flex flex-col ">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C]`}
            >
              Locations
            </p>

            <p
              className={`${plusJakartaSans.className} inline-flex items-center gap-2 sm:gap-7  w-[126px] sm:w-[130px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF]`}
            >
              Semarang
              <span className="w-[14px] h-[14px] inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    stroke-width="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
          <span className="w-[1px] h-[48px] border border-[#13131329] -ml-8 sm:-m-0"></span>

          <div className="sm:[134] sm:h-[48px]flex flex-col pl-2 sm:pl-0 ">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] pl-text-[#1A202C] `}
            >
              Date
            </p>
            <div className="inline-flex item-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center gap-2 sm:gap-7  w-[126px] sm:w-[130px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF]`}
              >
                20/July/2022
                <span className="w-[14px] h-[14px] inline-flex items-center">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                      fill="#1A202C"
                      stroke="#1A202C"
                      stroke-width="0.5"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
          <span className="w-[1px] h-[48px] border border-[#13131329] -ml-4  sm:p-0 sm:-m-0"></span>

          <div className="flex flex-col pl-2 sm:pl-0">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C] `}
            >
              Time
            </p>
            <div className="inline-flex item-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center gap-2 sm:gap-7  w-[126px] sm:w-[130px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF]`}
              >
                07:00
                <span className="w-[14px] h-[14px] inline-flex items-center">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                      fill="#1A202C"
                      stroke="#1A202C"
                      stroke-width="0.5"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="rounded-lg py-6 px-8 sm:py-8 md:px-12 bg-white flex flex-col justify-start items-start md:w-full">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-4 h-4 p-1 rounded-full bg-[#3563E94D] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]"></div>
          </div>
          <p
            className={`${plusJakartaSans.className} text-sm sm:text-base font-semibold leading-6 text-[#1A202C]`}
          >
            Pick - Up
          </p>
        </div>
        <div className="flex flex-row sm:justify-between gap-4 w-full">
          {/* Locations Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Locations
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-3 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              Semarang
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
          {/* Divider */}
          <span className="w-[1px] h-[48px] border border-[#13131329]"></span>
          
          {/* Date Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Date
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              20/July/2022
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
          {/* Divider */}
          <span className="w-[1px] h-[48px] border border-[#13131329]"></span>
          {/* Time Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Time
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              07:00
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="w-[60px] h-[60px] bg-blue-500 rounded-[10px] inline-flex items-center justify-center shadow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16124 3.83632L7.16124 17.4541"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.089 20.167L17.089 6.54921"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="rounded-lg py-6 px-8 sm:py-8 md:px-12 bg-white  flex flex-col justify-start items-start md:w-full">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-4 h-4 p-1 rounded-full bg-[#3563E94D] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]"></div>
          </div>
          <p
            className={`${plusJakartaSans.className} text-sm sm:text-base font-semibold leading-6 text-[#1A202C]`}
          >
            Drop - Off
          </p>
        </div>
        <div className="flex flex-row sm:justify-between gap-4 w-full">
          {/* Locations Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Locations
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              Semarang
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
          {/* Divider */}
          <span className="w-[1px] h-[48px] border border-[#13131329]"></span>
          {/* Date Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Date
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              20/July/2022
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
          {/* Divider */}
          <span className="w-[1px] h-[48px] border border-[#13131329]"></span>
          {/* Time Section */}
          <div className="flex flex-col">
            <p
              className={`${plusJakartaSans.className} text-sm sm:text-base font-bold leading-6 text-[#1A202C]`}
            >
              Time
            </p>
            <p
              className={`${plusJakartaSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium leading-6 text-[#90A3BF]`}
            >
              07:00
              <span className="inline-flex items-center">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00038 5.79939C5.59204 5.79939 5.18371 5.64189 4.87454 5.33272L1.07121 1.52939C0.902044 1.36022 0.902044 1.08022 1.07121 0.911055C1.24038 0.741888 1.52038 0.741888 1.68954 0.911055L5.49288 4.71439C5.77288 4.99439 6.22788 4.99439 6.50788 4.71439L10.3112 0.911055C10.4804 0.741888 10.7604 0.741888 10.9295 0.911055C11.0987 1.08022 11.0987 1.36022 10.9295 1.52939L7.12621 5.33272C6.81705 5.64189 6.40871 5.79939 6.00038 5.79939Z"
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth="0.5"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    
    </main>
  );
}

export default Pickswitchdrop;
