import Link from "next/link";
import Image from "next/image";

export default function Heading() {
  return (
    <div>
      <section
        id="home"
        className="bg-white dark:bg-gray-900 flex flex-row-reverse items-center py-5 px-5 lg:px-7"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -2">
          <Image
            src="/pic.png"
            width={500} // Adjust as needed for responsiveness
            height={500} // Adjust as needed for responsiveness
            alt="Picture of the Masood"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-center space-y-6 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white uppercase">
            Masood Noor
          </h1>
          <p className="text-lg text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite, we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex space-x-4 ">
            <Link
              href="https://www.fiverr.com/users/themasoodnoor/"
              className="py-3 px-5 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Hire Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/themasoodnoor/"
              className="py-3 px-5 text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
