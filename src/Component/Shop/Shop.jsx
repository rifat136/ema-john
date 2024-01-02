import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart,setCart]=useState([]); //storing cart in new array

    useEffect( ()=>{
        fetch('/public/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect( ()=>{
        const storedCart= getShoppingCart();
        const savedCart =[];
        //step:1 get id
        for(const id in storedCart){
            //step 2: get the product by using id
            const addedProduct= products.find(product=>product.id===id)
            //step:3 get quantity of product
            if(addedProduct) {
                const quantity =storedCart[id];
                addedProduct.quantity=quantity;
                //step:4 add the added product on saved cart
                savedCart.push(addedProduct); 
            }
            console.log('added product', addedProduct);   
        }
        //step:5  Set the cart
        setCart(savedCart); 
    },[products])
    

    //add to DB
    const handleAddToCart = (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }


    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                 products.map(product=>
                 <Product
                 key={product.id} 
                 product={product}
                 handleAddToCart={handleAddToCart}>
                 
                </Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/order">
                    <button  className='review-btn' >Review Order</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;