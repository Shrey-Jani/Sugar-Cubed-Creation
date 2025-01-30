import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
}

interface FeaturedProductsProps {
  products?: Product[];
  onQuickOrder?: (productId: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    title: "Classic Chocolate Chip",
    price: "$3.99",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    title: "Double Fudge Brownie",
    price: "$4.49",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176",
    title: "Red Velvet Dream",
    price: "$4.99",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1584365685547-9a5d6e64b02f",
    title: "Oatmeal Raisin",
    price: "$3.49",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a",
    title: "White Chocolate Macadamia",
    price: "$4.99",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1621236378655-68d5294f9ff7",
    title: "Peanut Butter Bliss",
    price: "$4.29",
  },
];

const FeaturedProducts = ({
  products = defaultProducts,
  onQuickOrder = (productId) =>
    console.log("Quick order clicked for product:", productId),
}: FeaturedProductsProps) => {
  return (
    <section className="w-full min-h-[600px] bg-[#F9F3E6] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#8B4513] mb-12"
        >
          Featured Cookies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                onQuickOrder={() => onQuickOrder(product.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
