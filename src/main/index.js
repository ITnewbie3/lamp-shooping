import React from 'react';
import './index.scss';

const MainPage = () => {
    return (
        <div>
           
            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="메인베너사진"/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>판매중인 상품들</h2>
                    <div id="produce-items">
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt=""/>
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='produce-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt=""/>해위
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            
        </div>
    )
};
export default MainPage;