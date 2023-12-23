import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    // const{cart}=props; //option: 2

let total=0;
let shipping=0;
let quantity=0;


    for(const product of cart){
        if(product.quantity===0){
            product.quantity= 1; 
            //by deafult ) thakle 1 kore dite hoy nahole price zero asbe
        }
        total= total+product.price * product.quantity;
        shipping= shipping+ product.shipping;
        quantity= quantity + product.quantity;
    }

   const totalTax=total*7/100;
   const grandTotal= total+shipping+totalTax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping Charge:$ {shipping}</p>
            <p>Tax:$ {totalTax}</p>
            <h4>Grand Total:$ {grandTotal}</h4>
            <p>stock:{cart.stock}</p>
            
        </div>
    );
};

export default Cart;