// import { Plus_Jakarta_Sans } from "next/font/google";

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Include weights you need
// });
// function Footer() {
//   return (
//     <div>
//       <div className="w-auto sm:h-[480px] bg-white sm:flex justify-between pt-[80px] px-[30px] ">
//         <div className="w-[150px] pb-[150px] sm:w-[292px] h-[92px] sm:h-[108px] flex flex-col gap-[16px] ">
//           <p
//             className={`${plusJakartaSans.className} w-[108px] sm:w-[148px] h-[28px] sm:h-[44px] text-[24px] sm:text-[32px] font-bold leading-[36px] sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9]`}
//           >
//             MORENT
//           </p>
//           <p
//             className={`${plusJakartaSans.className} w-[250px] sm:w-[292px] h-[48px] text-[14px] font-medium leading-[24px] tracking-[-0.02em]  text-[#13131399] pb-8`}
//           >
//             Our vision is to provide convenience and help increase your sales
//             business.
//           </p>
//         </div>
//         <div className="w-auto h-auto grid grid-cols-2 sm:flex sm:gap-[60px] pb-8">
//           <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
//             <p
//               className={`${plusJakartaSans.className} w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
//             >
//               About
//             </p>
//             <p
//               className={`${plusJakartaSans.className} w-[152px] h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399] `}
//             >
//               <span className="block">How it works</span>
//               <span className="block">Featured</span>
//               <span className="block">Partnership</span>
//               <span className="block">Bussiness Relation</span>
//             </p>
//           </div>
//           <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
//             <p
//               className={`${plusJakartaSans.className} h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
//             >
//               Community
//             </p>
//             <p
//               className={`${plusJakartaSans.className}  h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399]`}
//             >
//               <span className="block">Events</span>
//               <span className="block">Blog</span>
//               <span className="block">Podcast</span>
//               <span className="block">Invite a friend</span>
//             </p>
//           </div>
//           <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
//             <p
//               className={`${plusJakartaSans.className} w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
//             >
//               Socials
//             </p>
//             <p
//               className={`${plusJakartaSans.className} w-[152px] h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399]`}
//             >
//               <span className="block">Discord</span>
//               <span className="block">Instagram</span>
//               <span className="block">Twitter</span>
//               <span className="block">Facebook</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <hr className="w-[92%] border border-[#13131329] sm:-mt-[130px] sm:mx-auto hidden sm:block" />

//       <div className="w-auto sm:flex justify-between sm:px-[55px] sm:mt-[36px] hidden ">
//         <p
//           className={`${plusJakartaSans.className} h-[24px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]  `}
//         >
//           ©2022 MORENT. All rights reserved
//         </p>
//         <div className="w-auto">
//           <div
//             className={`${plusJakartaSans.className} w-[292px] h-[24px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-right text-[#1A202C] flex justify-between`}
//           >
//             <span className="block">Privacy & Policy</span>
//             <span className="block">Terms & Condition</span>
//           </div>
//         </div>
//       </div>
//       <div className="w-auto flex font-plusJakarta justify-between items-center px-8 sm:hidden ">
//         <p>Privacy & Policy</p>
//         <p>Terms & Condition</p>
//       </div>
//       <div className="w-auto flex justify-start items-center px-8 py-8 sm:hidden ">
//         <p>©2022 MORENT. All rights reserved</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 
              className={`${plusJakartaSans.className} text-2xl md:text-3xl font-bold text-[#3563E9]`}
            >
              <Link href="/">MORENT</Link>
            </h2>
            <p 
              className="text-sm text-[#90A3BF] max-w-xs"
            >
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:col-span-2">
            {/* About Column */}
            <div>
              <h3 
                className="text-xl font-semibold text-[#1A202C] mb-4"
              >
                About
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 
                className= "font-plusJakarta text-xl font-semibold text-[#1A202C] mb-4"
              >
                Community
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 
                className=" font-plusJakarta text-xl font-semibold text-[#1A202C] mb-4"
              >
                Socials
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#13131329] my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse md:flex-row sm:justify-between sm:items-center space-y-4 md:space-y-0">
          <p 
            className="font-plusJakarta text-sm font-semibold text-[#1A202C]"
          >
            ©2022 MORENT. All rights reserved
          </p>
          
          <div className="font-plusJakarta flex space-x-32 text-sm text-[#1A202C] font-semibold pb-5">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;