import Image from "next/image";
function Testimonials() {
  return (
    <div><section className="text-gray-600 body-font">
        
    <div className="container px-5 py-20 mx-auto">
    <div className="text-center">
      <h1 className="text-gray-900 font-medium title-font tracking-wider text-md">
        What Clients Say:
      </h1>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
    </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <Image
              width={500}
              height={500}
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="https://static.wixstatic.com/media/1e94d3_f0226f7459c64cbe92ae6f4f9e2363af~mv2.jpeg/v1/fill/w_407,h_447,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e94d3_f0226f7459c64cbe92ae6f4f9e2363af~mv2.jpeg"
            />
            <p className="leading-relaxed">
              If you like me you feel that sometimes receiving help from a
              stranger on Fiverr could be a bit risky. However, Masood
              stayed in constant communication and solved an exceedingly
              complicated problem for me. I look forward to working with him
              again.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              West McKee
            </h2>
            <p className="text-gray-500">Connectere.co Founder</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <Image
              width={500}
              height={500}
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0b790f01864bc4dc664c8b6ee7325a79-1706911246474/a01dc6aa-b973-474f-8dfe-3c42bd2ef7e9.png"
            />
            <p className="leading-relaxed">
              Thank you so much for always being available and ready and on
              time, your patience and your expertise is in valuable. I
              cannot thank you enough Masood!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Ms. Shea Johnson
            </h2>
            <p className="text-gray-500">Motivational Coach</p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-center">
            <Image
              width={500}
              height={500}
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/3976d15b4a0d0fdaee9bc3e6d89a11aa-1725961140543/79b1723c-4bed-4ff1-a676-fed1b7d265eb.JPEG"
            />
            <p className="leading-relaxed">
              Masood was an absolute lifesaver! I reached out to him with an
              issue involving iCloud+ and my Squarespace domain hosted on
              Wix, and he quickly understood the crux of the problem. His
              communication skills are excellent, and his depth of knowledge
              was evident from the start. Not only did he solve the issue
              efficiently, but he also made the entire process seamless and
              easy to follow. Masood is wonderful to work with, and I am
              extremely glad I chose him to help me. Highly recommend!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Haithammogherbi
            </h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Testimonials