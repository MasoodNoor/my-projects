import Image from "next/image";
import Logo from "@/public/fb-logo.svg";
import NewLogo from "@/public/facebook-logo-2019.png";
import Link from "next/link";

function LogoImg() {
  return (
    <div className="md:w-full md:h-full">
      <div className="text-sm text-center text-gray-600 md:hidden">
        <Link href="#">
          <h2>English (UK)</h2>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center md:h-full md:items-start">
        <div className="pt-6 md:hidden block">
          <Image
            className="m-10"
            src={NewLogo}
            width={65}
            height={65}
            alt="this is facebook mobile logo"
          ></Image>
        </div>
        <div className="hidden md:flex md:flex-col justify-center w-full md:-mt-32">
          <Image
            className="h-[106] md:-ml-7 md:-mb-2"
            src={Logo}
            width={300}
            height={300}
            alt="this is facebook logo"
          ></Image>
          <div className="md:flex">
            <h2 className="text-[1.8rem] leading-[33px] text-left w-[90%]">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoImg;
