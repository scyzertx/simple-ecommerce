import React from 'react';
import {CartContext} from '../context/cart';
import {Link} from 'react-router-dom';
import EmptyCart from  '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';

export default function Cart(){
    let user= false;
    const {cart , total}=React.useContext(CartContext);   
   console.log({cart , total});
    
     if(cart.length === 0){
    
     return <EmptyCart />
    }

    return <section className='car-items section'>
        <h2>Your Cart</h2>
        {cart?.map(item=>{

            return<CartItem key ={item.id} {...item}/>
        })}
        <h2> Total : ${total}</h2>
       {user ? (<Link to='/checkout' className='btn btn-primary btn-block'>
            checkout
        </Link>):( <Link to='/login' className='btn btn-primary btn-block'>
            Login
        </Link>)
}
       
    </section>
}