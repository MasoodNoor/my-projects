import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarCard from "./carCards";
import CarCards2 from "./carCards2";
import CarCards3 from "./carCards3";
import CarCards4 from "./carCards4";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCard />
              </CardContent>
            </Card>
          </div>
              </CarouselItem>
              <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9]    ">
                <CarCards2 />
              </CardContent>
            </Card>
          </div>
              </CarouselItem>
              <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCards3 />
              </CardContent>
            </Card>
          </div>
              </CarouselItem>
              <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCards4 />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
