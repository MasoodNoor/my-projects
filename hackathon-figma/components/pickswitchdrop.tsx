import { Plus_Jakarta_Sans } from "next/font/google";

// Import the Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Semibold
});

function Pickswitchdrop() {
  return (
    <main className="flex items-center justify-around py-[32px]">
      <div className="h-[132px] rounded-[10px] pt-[32px] px-[48px] bg-white">
        <div className="w-[92px] h-[25px] flex items-center gap-2 pb-3  ">
          <div className="w-4 h-4 p-[4px] rounded-[70px] bg-[#3563E94D]">
            <div className="w-2 h-2 p-[2px] rounded-[70px] bg-[#3563E9]"></div>
          </div>
          <p
            className={`${plusJakartaSans.className} inline-flex items-center w-[68px] h-[20px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-[#1A202C]`}
          >
            Pick - Up
          </p>
        </div>
        <div className="w-[486px] h-[48px] flex  justify-between items-center">
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C]`}
            >
              Locations
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your city
              </p>
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
            </div>
          </div>
          <hr className="w-[1px] h-[48px] border border-[#13131329] " />
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C] `}
            >
              Date
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your date
              </p>
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
            </div>
          </div>
          <hr className="w-[1px] h-[48px] border border-[#13131329] " />
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C] `}
            >
              Time
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your Time
              </p>
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="w-[60px] h-[60px] bg-blue-500 rounded-[10px] inline-flex items-center justify-center">
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
      <div className="h-[132px] rounded-[10px] pt-[32px] px-[48px] bg-white ">
        <div className="w-[120px] h-[25px] flex items-center gap-2 pb-3 ">
          <div className="w-4 h-4 p-[4px] rounded-[70px] bg-[#3563E94D]">
            <div className="w-2 h-2 p-[2px] rounded-[70px] bg-[#3563E9]"></div>
          </div>
          <p
            className={`${plusJakartaSans.className} inline-flex items-center w-[100px] h-[20px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-[#1A202C]`}
          >
            Drop - Off
          </p>
        </div>
        <div className="w-[486px] h-[48px] flex  justify-between items-center">
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C]  `}
            >
              Locations
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your city
              </p>
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
            </div>
          </div>
          <hr className="w-[1px] h-[48px] border border-[#13131329] " />
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C] `}
            >
              Date
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your date
              </p>
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
            </div>
          </div>
          <hr className="w-[1px] h-[48px] border border-[#13131329] " />
          <div className="flex flex-col gap-2">
            <p
              className={`${plusJakartaSans.className} w-[77px] h-[20px] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-[#1A202C] `}
            >
              Time
            </p>
            <div className="flex items-center">
              <p
                className={`${plusJakartaSans.className} inline-flex items-center w-[126px] h-[20px] text-[12px] font-medium leading-[24px] tracking-[-0.02em] text-[#90A3BF] `}
              >
                Select your Time
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pickswitchdrop;


