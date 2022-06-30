import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductPage from '../product';
import './index.scss';


const MainPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:3000/products")
        .then((result)=>{
            const products = result.data.products
            setProducts(products);
            console.log(products);
        }).catch((e)=>{
            console.log(e)
        })
    },[])
    return (
        <div>
           
            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="메인베너사진"/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>판매중인 상품들</h2>
                    <div id="produce-items">
                        
                                {products.map(product => (
                                    <div className='product-card'>
                                    <div className='product-img'> 
                                    <img src={product.imgsrc} alt=""/>
                                    </div>
                                   <div className='product-contents'>
                                   <span className='product-name'>{product.name}</span>
                                   <span className='produce-price'>{product.price}</span>
                                   <div className='product-seller'>
                                       <img src="images/icons/avatar.png" alt=""/>{product.seller}
                                   </div>
                               </div>  
                               </div>
                                )) }
                           
                       
                    </div>
                </div>
            </div >
            
        </div>
    )
};
export default MainPage;