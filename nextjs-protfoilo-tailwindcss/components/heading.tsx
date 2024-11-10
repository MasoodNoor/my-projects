import Link from "next/link";
import Image from "next/image";

export default function Heading() {
  return (
    <div>
          {/* <section className="bg-white dark:bg-gray-900 flex flex-row-reverse" >
              <div>
              <Image className="flex items-center"
      src={require('../app/imgs/profile_pic.png')}
      width={1000}
      height={1000}
      alt="Picture of the author"
    />
              </div>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    <div className="flex flex-col justify-center items-center w-f">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase">
        Masood noor
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <Link
          href="https://www.fiverr.com/users/themasoodnoor/"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Hire Me
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/themasoodnoor/"
          className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Linkedin
        </Link>
        
                          
      </div>
    </div>
    
  </div>
</section> */}

<section id="home" className="bg-white dark:bg-gray-900 flex flex-row-reverse items-center py-5 px-5 lg:px-7">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -2">
    <Image
      className="rounded-lg"
      src={require('../app/imgs/profile_pic.png')}
      width={500}  // Adjust as needed for responsiveness
      height={500} // Adjust as needed for responsiveness
      alt="Picture of the author"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-center space-y-6 p-4">
    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white uppercase">
      Masood Noor
    </h1>
    <p className="text-lg text-gray-500 lg:text-xl dark:text-gray-400">
      Here at Flowbite, we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.
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

  )
}

