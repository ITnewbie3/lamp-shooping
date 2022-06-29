import React from 'react';
import {NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <div id="header">
                <div className='inner'>
                    <h1><NavLink to="/">LampShopping</NavLink></h1>
                    <ul>
                        <li><NavLink to="/upload">상품등록하기</NavLink></li>
                        <li><NavLink to="/product">상품보기</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;