import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
        <Button variant="link" className={"flex items-center justify-center h-10 w-auto mb-3"} onClick={()=>navigate('/')}>
          <ShoppingCart className="size-7 dark:text-sky-800"/>
        </Button>
        <span className="font-cormorant text-2xl inline-block m-1">
          ECommerce
        </span>
    </div>
  );
}