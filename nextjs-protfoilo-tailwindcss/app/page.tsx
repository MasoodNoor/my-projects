import Heading from "@/components/heading";
import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col flex-wrap">
        <div>
          <Header />
        </div>
        <div>
          <Heading />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
