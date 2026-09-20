import { Button } from "../../../src/components/ui/button";
import { Label } from "../../../src/components/ui/label";
import type { QuickItem } from "../types/item.types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../src/components/ui/sheet";


export function Cart({quickItem}:{quickItem :QuickItem[]}){
    return <Sheet>
      <SheetTrigger render={<Button variant="outline">Cart</Button>} />
      <SheetContent side="right" className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            List of Items in the Cart
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="grid gap-3 flex-wrap">
            <div>
            {quickItem.map((item:{id:number,title:string;price:number})=>
              <div className="grid grid-cols-4 gap-4 border-b items-center last:border-0" key={item.id}>
                <div className="wrap-break-word">{item.title}</div>
                <div className="break-all text-right">{item.price}</div>
                <div className="break-all text-right">{item.price}</div>
                <div className="break-all text-right">{item.price}</div>
              </div>)}
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 py-2">
          <Label>Total</Label>
          <Label>{Math.round(quickItem.reduce((acc,curr)=>acc+curr.price,0))}</Label>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
}