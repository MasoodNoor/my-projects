import Link from "next/link";
import Image from "next/image";
import Pic from "@/public/images/pic.png";

export default function Heading() {
  return (
    <div>
     <section
  id="home"
  className="bg-white dark:bg-gray-900 flex flex-col-reverse lg:flex-row-reverse items-center py-10 px-6 lg:px-8"
>
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
    <Image
      src={Pic}
      width={400} // Adjust for mobile
      height={400} // Adjust for mobile
      alt="Picture of Masood"
      className="rounded-full lg:rounded-full brightness-110"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-6 p-4 lg:pl-8">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">
      Masood Noor
    </h1>
    <p className="text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
      I am positive-minded and have the right attitude to learn new things fast. I always ask questions if I&apos;m not sure. I work as efficiently as possible and achieve the best in whatever I do.
    </p>
    <p className="text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
      Teamwork is my best attribute.
    </p>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
