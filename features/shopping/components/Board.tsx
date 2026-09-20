import { useEffect, useState } from "react";
import {CardBusiness} from "./CardBusiness";
import type {Item, CardBsn} from "../types/item.types"


export default function Board() {
    const [items, setItems] = useState<Item[]>([]);

    const cardBusinessDetails:CardBsn[] = items.map(item=>({
      id: item.id,
      image: item.thumbnail,
      title: item.title,
      price: item.price
    }))

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>setItems(data.products)).catch(err=>console.error(err));
    },[])

  return (
    <>
    <div className="flex justify-end m-6 items-end flex-wrap">
        {/* <Cart quickItem={itemsQuickLookup}/> */}
    </div>
    {/* <div className="h-46 flex flex-col items-center overflow-y-auto border-2 ">
        {items.map(item=><li>{item.title}</li>)}
    </div> */}
    <div className="flex justify-center">
    <CardBusiness cardDetails = {cardBusinessDetails}/>
    </div>
    </>
  )
}
