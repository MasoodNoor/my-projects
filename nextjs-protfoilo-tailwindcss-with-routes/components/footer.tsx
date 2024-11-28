import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="text-center p-4 bg-gray-100 text-base-content">
        <nav className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <Link href="#home" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="#testimonials" className="hover:text-gray-900">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <aside className="mt-4 md:mt-2">
          <p className="text-sm md:text-base">
            Copyright © {new Date().getFullYear()} - All rights reserved by TWM
            LLC
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
