
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Hero from "@/components/hero";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // Include the weight you need
});

export default function Home() {
  return (
    <main>
      <Hero />
      
    </main>
  );
}
