import React, { useState } from 'react';
const CartContext = React.createContext();

function CartProvider({children}){
    const [cart, setCart]= useState([]);
    const [total, setTotal]= useState(0);
    const [cartItems, setCartItems]= useState(0);

    React.useEffect(()=>{
     
        let newCartItems = cart.reduce((total, cartItem)=>
        {return total += cart.amount;
        },0);
        setCartItems(newCartItems);

        let newTotal= cart.reduce((total , cartItem)=>{
            return total += (cartItem.amount*cartItem.price);

        },0)
        newTotal =parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
        
    },[cart])

 const removeItem = id => {
     setCart([...cart].filter(item => item.id !==id));
 };

 const increaseAmount = id => {
    setCart( [...cart].map(item=>{
         return item.id ===id?{...item, amoun:item.amount+1}:{...item};
     })) 
 };
      
 const decreaseAmount = (id, amount) => {
     if(amount===1){
         removeItem(id);
         return;
     }
     else{
        setCart( [...cart].map(item=>{
            return item.id ===id?{...item, amoun:item.amount-1}:{...item};
        }))
     }
 };

 const addToCart = product => {
    const {id, image, title, price} =product;
    const item =[...cart].find(item=>item.id===id);
    if (item){
        increaseAmount(id)
        return;
    }
    else{
        const newItem= {id, image, title, price, amount:1};
        const newCart=[...cart, newItem];
        setCart(newCart);
    }
 };

 const clearCart = id => {
     setCart([]);
 };
    return (<CartContext.Provider 
        value ={{
        cart, 
        total, 
        cartItems, 
        removeItem , 
        increaseAmount,
        decreaseAmount ,
        addToCart,
        clearCart}}>
        {children}
    </CartContext.Provider>
     );
}

export {CartContext , CartProvider };