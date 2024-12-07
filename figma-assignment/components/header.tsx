import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <div className={inter.className}>
      <div className="w-[1170px] h-[38px] flex items-center justify-center gap-[148px] text-black bg-white mx-[135px]">
        <div className="w-[675px] h-[24px] flex gap-[190px]">
          <div className="w-[118px] h-[24px]">
            <p className="font-bold text-[24px] leading-[24px] tracking-[3%]">
              Exclusive
            </p>
          </div>
          <div className="w-[367px] h-[24px]">
            <ul className="flex gap-[48px]">
              <li className="w-[48px] h-[24px]">Home</li>
              <li className="w-[66px] h-[24px]">Contact</li>
              <li className="w-[48px] h-[24px]">About</li>
              <li className="w-[61px] h-[24px]">Sign Up</li>
            </ul>
          </div>
        </div>
        <div className="w-[347px] h-[38px] flex gap-[24px]">
          <div className="w-[243px] h-[38px] flex gap-[10px] items-center py-[7px] pl-[20px] pr-[12px] rounded-[4px] bg-[#F5F5F5]">
            <div className="w-[211px] h-[24px] flex gap-[34px] justify-center items-center p-0">
              <p className="w-[153px] h-[18px] opacity-[50%] font-[Poppins] text-[12px] leading-[18px]">
                What are you looking for?
                          </p>
                          <div className="w-[24px] h-[24px] flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
                      </div>
            </div>
            
                      <div className="w-[80px] h-[32px] flex gap-[16px] justify-center items-center text-black p-0 my-[3px]">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[32] h-[32]">
              <div className="w-[32] h-[32] text-black">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.25 3.75H5.25L7.5 16.5H19.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
