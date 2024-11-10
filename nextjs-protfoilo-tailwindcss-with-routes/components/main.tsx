import Image from "next/image";
export default function Main() {
  return (
    <div>
          <div>
          <Image
      src={require('../app/imgs/profile_pic.png')}
      width={500}
      height={500}
      alt="Picture of the author"
    />
              
         </div>

    </div>
  );
}
