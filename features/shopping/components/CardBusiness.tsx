import { Card, CardContent } from "@/components/ui/card"
import type {CardBsn} from "../types/item.types"
import {Plus,Minus} from "lucide-react";
import {AspectRatio} from "@/components/ui/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import {Cart} from "../components/Cart";

export function CardBusiness({cardDetails}:{cardDetails:CardBsn[]}) {
  const [quantity, setQuantity] = useState<number>(1);
  const [itemsSelected, setItemsSelected] = useState<CardBsn[]>([]);

  function finalList(customId: number){
    const selectedItem = cardDetails.find(item=>item.id === customId);
    const itemInCart = itemsSelected.find(item=>item.id===customId);
    if(selectedItem && !itemInCart){
      setItemsSelected(prev=>[...prev, selectedItem]);
    }
 }

  const increase = ()=>{setQuantity(prev=>prev+1)}
  const decrease = ()=>{setQuantity(prev=>(prev>1?prev-1:1))}
  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
        {cardDetails.map(detail => (
          <CarouselItem key={detail.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-between gap-3 p-6">
                  <AspectRatio ratio={16 / 9} className="w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={detail.image}
                      alt={detail.title || "Photo"}
                      className="w-full h-full object-contain"
                      />
                  </AspectRatio>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <div className="flex flex-col gap-1.5">
                      <Label>{detail.title}</Label>
                      <Label>$ {detail.price}</Label>
                      
                      <div className="flex justify-between my-2 p-1">
                        <Button className="p-5" size={"lg"} variant={"secondary"} onClick={()=>finalList(detail.id)}>Buy</Button>
                        <div className="flex border items-center rounded-lg p-0.5 bg-background shadow-sm">
                          <Button onClick={decrease} size={"icon"} variant={"ghost"} disabled={quantity<1}><Minus /></Button>
                          <Label>{quantity}</Label>
                          <Button onClick={increase} variant={"ghost"} size={"icon"}><Plus/></Button>
                        </div>
                      </div>
                  </div>
                </CardContent>
              </Card>
              <Cart quickItem={itemsSelected}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
