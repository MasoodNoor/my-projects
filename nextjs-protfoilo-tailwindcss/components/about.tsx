import Image from "next/image";

Image;
export default function About() {
  return (
    <div>
      <section id="about" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <blockquote className="text-xl italic font-semibold text-gray-600">
              <svg
                className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p>
              &quot;Efficiency is the soul of productivity, and I am here to help
                you achieve it.&quot;
              </p>
            </blockquote>
            <br />
            <p className="leading-relaxed text-lg">
              I am Masood Noor, an automation expert and Fiverr freelancer
              dedicated to creating seamless, efficient workflows for my
              clients. I specialize in customizing integrations that streamline
              your business processes, helping you save time and focus on what
              matters most. I value clear communication and timely responses,
              ensuring every client receives top-tier service and support. Ready
              to take your operations to the next level? Lets connect on Fiverr
              and explore how I can help make your systems work better for you.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              What Clients Say:
            </h2>
          </div>
        </div>
      </section>

      <section id="testimonials" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
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
  );
}
