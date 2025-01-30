import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroCarouselProps {
  images?: string[];
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroCarousel = ({
  images = [
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    "https://images.unsplash.com/photo-1621236378699-8597faf6a176",
  ],
  tagline = "Handcrafted Cookies Made with Love",
  ctaText = "Order Now",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroCarouselProps) => {
  return (
    <div className="relative w-full h-[600px] bg-[#F9F3E6]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-[600px]">
              <img
                src={image}
                alt={`Seasonal cookie ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 px-4">
                    {tagline}
                  </h1>
                  <Button
                    onClick={onCtaClick}
                    className="bg-[#DAA520] hover:bg-[#8B4513] text-white text-lg px-8 py-6"
                    size="lg"
                  >
                    {ctaText}
                  </Button>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
