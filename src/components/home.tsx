import React, { useState } from "react";
import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import FeaturedProducts from "./FeaturedProducts";
import CertificationSection from "./CertificationSection";
import NewsletterSignup from "./NewsletterSignup";
import OrderModal from "./OrderModal";

interface HomeProps {
  initialSelectedProduct?: {
    id: string;
    title: string;
    price: string;
    image: string;
  };
}

const Home = ({ initialSelectedProduct = null }: HomeProps) => {
  const [selectedProduct, setSelectedProduct] = useState(
    initialSelectedProduct,
  );
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(
    !!initialSelectedProduct,
  );

  const handleQuickOrder = (productId: string) => {
    const product = defaultProducts.find((p) => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsOrderModalOpen(true);
    }
  };

  const defaultProducts = [
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

  return (
    <div className="min-h-screen bg-[#F8E3DD]">
      <Header />
      <main>
        <HeroCarousel
          onCtaClick={() => {
            setSelectedProduct(defaultProducts[0]);
            setIsOrderModalOpen(true);
          }}
        />
        <FeaturedProducts
          products={defaultProducts}
          onQuickOrder={handleQuickOrder}
        />
        <CertificationSection />
        <NewsletterSignup />
      </main>

      {selectedProduct && (
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => {
            setIsOrderModalOpen(false);
            setSelectedProduct(null);
          }}
          productTitle={selectedProduct.title}
          productPrice={selectedProduct.price}
          productImage={selectedProduct.image}
        />
      )}
    </div>
  );
};

export default Home;
