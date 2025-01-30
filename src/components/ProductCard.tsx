import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  image?: string;
  title?: string;
  price?: string;
  onQuickOrder?: () => void;
}

const ProductCard = ({
  image = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
  title = "Classic Chocolate Chip",
  price = "$3.99",
  onQuickOrder = () => console.log("Quick order clicked"),
}: ProductCardProps) => {
  return (
    <Card className="relative w-[350px] h-[400px] group bg-white overflow-hidden">
      <CardContent className="p-0 h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 space-y-4"
        >
          <h3 className="text-white text-2xl font-semibold text-center">
            {title}
          </h3>
          <p className="text-white text-xl font-bold">{price}</p>
          <Button
            onClick={onQuickOrder}
            className="bg-[#DAA520] hover:bg-[#8B4513] text-white"
          >
            Quick Order
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
