import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Minus, Plus } from "lucide-react";

interface OrderModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  productTitle?: string;
  productPrice?: string;
  productImage?: string;
}

const OrderModal = ({
  isOpen = true,
  onClose = () => console.log("Close modal"),
  productTitle = "Classic Chocolate Chip Cookie",
  productPrice = "$3.99",
  productImage = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
}: OrderModalProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#8B4513]">
            Order Details
          </DialogTitle>
          <DialogDescription>
            Complete your order for {productTitle}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <img
              src={productImage}
              alt={productTitle}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <div className="col-span-3 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrement}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrement}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Total</Label>
            <div className="col-span-3">
              <p className="text-lg font-semibold">
                $
                {(parseFloat(productPrice.replace("$", "")) * quantity).toFixed(
                  2,
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Special Notes
            </Label>
            <Input
              id="notes"
              placeholder="Any special instructions?"
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-[#8B4513] text-[#8B4513]"
          >
            Cancel
          </Button>
          <Button
            onClick={() => console.log("Order placed")}
            className="bg-[#DAA520] hover:bg-[#8B4513] text-white"
          >
            Place Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
