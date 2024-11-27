import Link from "next/link";
import Image from "next/image";
import Pic from "@/public/images/pic.png";
import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-raleway",
});

export default function Heading() {
  return (
    <div>
      <section
        id="home"
        className="bg-gray-900 flex flex-col justify-center items-center py-32 px-2 sm:flex-row-reverse lg:px-8  "
      >
        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2 lg:justify-end mb-8 lg:mb-0 px-0">
          <Image
            src={Pic}
            width={400} // Adjust for mobile
            height={400} // Adjust for mobile
            alt="Picture of Masood"
            className="rounded-full brightness-110 w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-6 p-2 lg:pl-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">
            Masood Noor
          </h1>
          <p className="text-base md:text-md lg:text-xl text-gray-500 dark:text-gray-400">
            I am positive-minded and have the right attitude to learn new things
            fast. I always ask questions if I&apos;m not sure. I work as
            efficiently as possible and achieve the best in whatever I do.{" "}
            <br />
            Teamwork is my best attribute.
          </p>

          <div className="flex md:flex-row space-x-3 lg:space-x-4">
            <Link
              href="https://www.fiverr.com/users/themasoodnoor/"
              className="py-3 px-7 text-gray-900 bg-[Whitesmoke] border border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100"
            >
              <span className="flex gap-1 justify-center items-center">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#1dbf73"
                    d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"></path>
                </svg>
                <span className="font-medium">Hire Me</span>
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/themasoodnoor/"
              className="py-3 px-7 text-gray-900 bg-[Whitesmoke] border border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100"
            >
              <span className="flex gap-1 justify-center items-center">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                 
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
