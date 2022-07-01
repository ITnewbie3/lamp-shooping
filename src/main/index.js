import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';
import MainProduct from './MainProduct';


const MainPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:3000/products")
        .then((result)=>{
            const products = result.data;
            setProducts(products);
        }).catch((e)=>{
            console.log(e)
        })
    },[])
    if(products===[]) return <div>로딩중입니다...</div>
    return (
        <div>
           
            <div id="main">
                <div id="banner">
                    <img src="/images/banners/banner1.png" alt="메인베너사진"/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>판매중인 상품들</h2>
                    <div id="produce-items">
                        
                    {products.map(product => <MainProduct key={product.id} product={product} />)}
                           
                       
                    </div>
                </div>
            </div >
            
        </div>
    )
};
export default MainPage;