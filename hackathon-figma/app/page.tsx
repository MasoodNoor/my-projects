import Hero from "@/components/hero";
import Pickswitchdrop from "@/components/pickswitchdrop";
import PopularCar from "@/components/popularCar";
import RecommendationCar from "@/components/recommendationcar";

export default function Home() {
  return (
    <main className="bg-[#F6F7F9] flex flex-col justify-center items-center">
      <Hero />
      <Pickswitchdrop />

      <PopularCar />
      <RecommendationCar />
    </main>
  );
}
