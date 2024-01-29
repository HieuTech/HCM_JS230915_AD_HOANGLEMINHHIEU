import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import "./ListProduct.scss"
export default function ListProduct(props) {
    const {products,setProducts} = props
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [price,setPrice] = useState(0)

    const handleAdd = (productId)=>{         
        let product = products.find(item => item.id == productId)
        if(product){

            let newCart = [...cart,product]
            let newPrice = price + product.price

            setCart(newCart
            )
            setCount(newCart.length)
            setPrice(newPrice)
        }
       
    }  

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))

    },[cart])
    

  return (
    <div>
        <Header setPrice={setPrice} price={price}  count={count} cart={cart} setCount={setCount} setCart={setCart}></Header>
        <h1 className='title'>Danh sách sản phẩm</h1>
        <ul className='list-product'>
        {products.map((item,index)=>{
        return <li className='product-item' key={index}>
           
                <div >
                <img className='product-img' src={item.img} alt="" />
                <p className='product-name'>Name: {item.name}</p>
                <p className='product-price'>Price: {item.price}</p>
                </div>
                <div className='btn-add'>
                    <button className='btn ' onClick={()=>{
                        handleAdd(item.id)
                    }}>Add To Cart</button>
                </div>
        </li>
            
                

            
      
      })}
        </ul>
    
    </div>
  )
}
