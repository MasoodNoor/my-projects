import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/*   */}
      <header className="bg-white px-8 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap p-3 md:p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0"
          >
            {/* Change the text based on screen size */}
            <span className="text-lg md:text-xl">
              <span className="block md:hidden">TWM</span> {/* Mobile text */}
              <span className="hidden md:block">Tech With Masood</span>{" "}
              {/* Larger screens */}
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="ml-0 md:ml-auto flex flex-wrap items-center text-base justify-center space-x-3 md:space-x-5">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/testimonials" className="hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
