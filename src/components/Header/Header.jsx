import React, { useEffect, useState } from 'react'
import "./Header.scss"

export default function Header(props) {
  const {count,cart,setCart,setCount,price,setPrice} = props
  const [isOpen, setIsOpen] = useState(false);
  console.log(cart);
  const openModal = () => {
    setIsOpen(true);


  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleRemove = (cartId) =>{
    let newCart = cart.filter(item => item.id !== cartId)
    setCart(newCart)
    let newCount = count -1;
    setCount(newCount )
  }

  const handleIncrease=(id)=>{
    let cartItem = cart.find(item => item.id == id)
    if(cartItem){
      let newPrice = price + cartItem.price
      setPrice(newPrice)
      let newCount = count +1;
    setCount(newCount )
    }
  }
  const handleDecrease=(id)=>{
    let cartItem = cart.find(item => item.id == id)
    if(cartItem){
      let newPrice = price - cartItem.price
      setPrice(newPrice)
      let newCount = count - 1;
    setCount(newCount )
    
    }
  }
  useEffect(()=>{
    
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  return (
    <div>
      <div className='container'>
        <ul className='nav-list'>
            <li className="nav-item">Trang Chủ</li>
            <li className="nav-item">Danh sách sản phẩm</li>
        </ul>
        <div> 
        <i className="fa fa-shopping-cart" onClick={()=>{
      openModal()
    }} ></i>
    {console.log(count)}
    {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              Close
            </button>
            <h2>Cart</h2>
            <ul className='nav-list'>
            {cart.map((item,index)=>{
              return <li className="nav-item" key={index}>
                <img className='product-img' src={item.img} alt="" />
                <p className='product-name'>Name: {item.name}</p>
                <p className='product-price'>Price: {item.price}</p>
                <button  className="icon"onClick={()=>{
                  handleRemove(item.id)
                }}><i class="fa-solid fa-trash"></i></button>
                <button onClick={()=>{
                  handleIncrease(item.id)
                }} className="icon"><i class="fa-solid fa-plus"></i></button>
                <button onClick={()=>{
                  handleDecrease(item.id)
                }} className="icon"><i class="fa-solid fa-minus"></i></button>
              </li>
              
            })}
          
        </ul>
           
            <div className='result'>
            <p>TotalPrice: {price}</p>
            <p>Quantity: {count}</p>
            </div>


          </div>
        </div>
      )}
        <div className='popUp'><span>{count}</span></div>
        </div>
      </div>
    </div>
  )
}
