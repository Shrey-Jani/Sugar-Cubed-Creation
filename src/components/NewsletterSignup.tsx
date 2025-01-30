import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

interface NewsletterSignupProps {
  onSubmit?: (email: string) => void;
  promotionalOffer?: string;
  illustration?: string;
}

const NewsletterSignup = ({
  onSubmit = (email: string) => console.log("Newsletter signup:", email),
  promotionalOffer = "10% off your first order!",
  illustration = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
}: NewsletterSignupProps) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };

  return (
    <div className="w-full min-h-[400px] bg-[#F9F3E6] py-12 px-4">
      <Card className="max-w-[1200px] mx-auto bg-white shadow-lg">
        <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <Cookie className="h-8 w-8 text-[#DAA520]" />
              <h2 className="text-3xl font-bold text-[#8B4513]">Stay Sweet!</h2>
            </motion.div>

            <p className="text-lg text-gray-600">
              Subscribe to our newsletter for exclusive offers, new flavors, and
              baking tips!
            </p>

            <div className="bg-[#F8E3DD] p-4 rounded-lg">
              <p className="text-[#8B4513] font-semibold">{promotionalOffer}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#DAA520] hover:bg-[#8B4513] text-white"
              >
                Sign Up Now
              </Button>
            </form>
          </div>

          <div className="hidden md:block">
            <motion.img
              src={illustration}
              alt="Decorated Cookies"
              className="w-full h-[300px] object-cover rounded-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterSignup;
