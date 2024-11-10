
import Heading from "@/components/heading";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <div className="flex-col">
        <Heading />
        <About />
        <Contact />
      </div>
    </div>
  );
}
