import { useEffect, useState } from "react";
import type { Products } from "@/components/types/ProductsProps";

export function Cart(){
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json()).then((data)=>setProducts((data.products))).catch(err=>console.error(err));
    },[]);
    return <div className="min-h-svh flex p-4">
        {products.map((product:Products) =>(
            <div key={product.id} className="flex flex-col items-center justify-center border border-solid p-18">
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="100"
                    />
            </div>
        ))}
    </div>
}