import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarCard from "./carCard";



export function CarouselDemo() {
  return (
    <Carousel className="">
      <CarouselContent>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCard
                  name="Koenigsegg"
                  type="Sport"
                  fuel="90L"
                  capacity="2 People"
                  price="$99.00"
                  imageSrc="/car-images/carimg-1.png"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9]    ">
                <CarCard
                  name="Nissan GT - R"
                  type="Sport"
                  fuel="80L"
                  capacity="2 People"
                  price="$80.00"
                  imageSrc="/car-images/carimg-2.png"
                  oldPrice="$100.00"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCard
                  name="Rolls - Royce"
                  type="Sedan"
                  fuel="70L"
                  capacity="4 People"
                  price="$96.00"
                  imageSrc="/car-images/carimg-3.png"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex items-center justify-center bg-[#F6F7F9] ">
                <CarCard
                  name="Nissan GT - R"
                  type="Sport"
                  fuel="80L"
                  capacity="2 People"
                  price="$80.00"
                  imageSrc="/car-images/carimg-2.png"
                  oldPrice="$100.00"
                />
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
