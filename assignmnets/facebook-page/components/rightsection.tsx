import Link from "next/link";
import Image from "next/image";
import Metalogo from "@/public/meta-logo.svg";

function FormButtons() {
  return (
    <div className="md:w-[70%]">
      <div className="">
        <div className="flex flex-col gap-5 justify-center md:bg-white py-3 rounded-xl md:rounded-lg md:py-4 items-center shadow-md ">
          <div className="w-full px-3 flex flex-col gap-3 ">
            <div className="">
              <input
                type="email"
                className="focus:outline-none border border-gray-300 md:border md:border-gray-300 placeholder-gray-400  text-black rounded-2xl md:rounded-md block w-full py-5 px-3 md:py-3 text-base md:font-medium md:focus:outline-black"
                placeholder="Email address or phone number"
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                className="focus:outline-none border border-gray-300 md:border md:border-gray-400 text-gray-900 placeholder-gray-400 rounded-2xl md:rounded-lg block w-full py-5 px-3 md:py-3 text-base md:font-medium md:focus:outline-black"
                placeholder="Password"
                required
              />
            </div>
            <button className="bg-[#1877F2] hover:bg-[#237aec] text-white text-base md:text-xl rounded-full md:rounded-lg py-2.5 md:py-2.7 px-3.5">
              Log in
            </button>
          </div>

          <div className="">
            <Link className="text-black md:text-blue-500  text-lgl" href={"#"}>
              Forgotten password?
            </Link>
          </div>
          <hr className="w-[90%] hidden md:block" />
          <div className="items-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#36A420] hover:bg-[#359e20] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-bold px-7 py-3 hidden md:block"
            >
              Create new account
            </button>
          </div>
        </div>
        <div className="text-center mt-6 text-sm w-full hidden md:block">
          <Link className="font-medium" href={"#"}>
            Create a Page{" "}
          </Link>
          for a celebrity, brand or business.
        </div>

        <div className="flex flex-col justify-center items-center mt-32 md:hidden ">
          <button
            type="button"
            className="text-blue-600 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full px-28 py-3 text-center"
          >
            Create new account
          </button>
          <div className="flex flex-col justify-center items-center py-0">
            <Image
              className="opacity-75"
              src={Metalogo}
              width={60}
              height={60}
              alt="Meta logo"
            ></Image>
            <div className="flex flex-row gap-2 text-xs -mt-2 text-gray-500 text-[10px]">
              <Link href="">About</Link>
              <Link href="">Help</Link>
              <Link href="">More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormButtons;
