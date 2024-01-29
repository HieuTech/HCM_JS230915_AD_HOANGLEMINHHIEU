import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ListProduct from '../../components/ListProduct/ListProduct.jsx';
export default function Home() {
    const dummyData = [
        {
            id: uuidv4(),
            name:"Iphone13",
            price:2200000,
            img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTyxa_jaWMFQZ1H_TGfmlqBoQGyB-sdkPLeYrf-Jv80pL82uXrj7OGYk8PKXBNi71RS5wtgBD8RJ-gxwU3uHmsBbIyEs6TojL2KO73BB0bhGLwacNWyCq-DuL0YMBtwJp7yUwoQg&usqp=CAc"
        },
        {
            id: uuidv4(),
            name:"Iphone12",
            price:4600000,
            img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTyxa_jaWMFQZ1H_TGfmlqBoQGyB-sdkPLeYrf-Jv80pL82uXrj7OGYk8PKXBNi71RS5wtgBD8RJ-gxwU3uHmsBbIyEs6TojL2KO73BB0bhGLwacNWyCq-DuL0YMBtwJp7yUwoQg&usqp=CAc"
        },
        {
            id: uuidv4(),
            name:"Iphone15",
            price:2900000,
            img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTyxa_jaWMFQZ1H_TGfmlqBoQGyB-sdkPLeYrf-Jv80pL82uXrj7OGYk8PKXBNi71RS5wtgBD8RJ-gxwU3uHmsBbIyEs6TojL2KO73BB0bhGLwacNWyCq-DuL0YMBtwJp7yUwoQg&usqp=CAc"
        }
    ]

    const [products, setProducts] = useState(dummyData)
    useEffect(()=>{
       if(!localStorage.getItem("products") || "[]")
       localStorage.setItem("products",JSON.stringify(products))
    },[])
  return (
    <div>   
        

   
        <ListProduct products={products} setProducts={setProducts}></ListProduct>
    </div>
  )
}
