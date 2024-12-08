import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights you need
});
function Footer() {
  return (
    <div>
      <div className="w-full h-[480px] bg-white flex justify-between pt-[80px] px-[60px] ">
        <div className="w-[292px] h-[108px] flex flex-col gap-[16px]">
          <div
            className={`${plusJakartaSans.className} w-[148px] h-[44px]  text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left text-[#3563E9]`}
          >
            MORENT
          </div>
          <div
            className={`${plusJakartaSans.className} w-[292px] h-[48px] text-[16px] font-medium leading-[24px] tracking-[-0.02em]  text-[#13131399]`}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </div>
        </div>
        <div className=" h-[244px] flex gap-[60px]">
          <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
            <p
              className={`${plusJakartaSans.className} w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
            >
              About
            </p>
            <p
              className={`${plusJakartaSans.className} w-[152px] h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399] `}
            >
              <span className="block">How it works</span>
              <span className="block">Featured</span>
              <span className="block">Partnership</span>
              <span className="block">Bussiness Relation</span>
            </p>
          </div>
          <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
            <p
              className={`${plusJakartaSans.className} h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
            >
              Community
            </p>
            <p
              className={`${plusJakartaSans.className}  h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399]`}
            >
              <span className="block">Events</span>
              <span className="block">Blog</span>
              <span className="block">Podcast</span>
              <span className="block">Invite a friend</span>
            </p>
          </div>
          <div className="w-[152px] h-[244px] flex flex-col gap-[24px]">
            <p
              className={`${plusJakartaSans.className} w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em]  text-[#1A202C]`}
            >
              Socials
            </p>
            <p
              className={`${plusJakartaSans.className} w-[152px] h-[188px] text-[16px] font-medium leading-[48px] tracking-[-0.02em] text-[#13131399]`}
            >
              <span className="block">Discord</span>
              <span className="block">Instagram</span>
              <span className="block">Twitter</span>
              <span className="block">Facebook</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[92%] border border-[#13131329] -mt-[130px] mx-auto " />

      <div className="w-auto flex justify-between px-[55px] mt-[36px]">
        <div
          className={`${plusJakartaSans.className} w-[292px] h-[24px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]  `}
        >
          ©2022 MORENT. All rights reserved
        </div>
        <div className="w-auto">
          <div
            className={`${plusJakartaSans.className} w-[292px] h-[24px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-right text-[#1A202C] flex justify-between`}
          >
            <span className="block">Privacy & Policy</span>
            <span className="block">Terms & Condition</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
