import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Tech With Masood</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#home" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="#testimonials" className="mr-5 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
