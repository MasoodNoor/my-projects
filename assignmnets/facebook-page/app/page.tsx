import LogoImg from "../components/leftsection";
import FormButtons from "../components/rightsection";

export default function Home() {
  return (
    <div className="bg-[#F2F4F7] h-screen flex flex-col gap-1 p-2 items-center md:flex-row md:justify-center ">
      <div className="md:h-[80%] md:w-[74%] md:flex md:flex-row md:justify-center md:items-center">
        <LogoImg />
        <FormButtons />
        
      </div>
      
    </div>
  );
}
