import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './product.scss';
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const [ product, setProduct] = useState(null);
    //useParams() 실행되면 파라미터 값을 가지고 있는 객체를 반환
    //product/1
    const { id } = useParams();
    useEffect(function(){
        axios.get(`http://localhost:3000/product/${id}`)
        .then(result => {
            const data = result.data;
            setProduct(data)
        })
        .catch(e=> {
            console.log(e);
        })
    },[])
    if(!product) return <div> 로딩중입니다. </div>
    return (
        <div className='inner'>
            <div id="image-box">
                <img src={`../`+product.imgsrc} alt="" />
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="images/icons/avatar.png" alt="" />
                            <span>이름 : {product.seller}</span>
                        </div>
                    </li>
                    <li>
                        제품명 : {product.name}
                    </li>
                    <li>
                        가격 : {product.price}원
                    </li>
                    <li>
                        등록일 2022년 6월 29일
                    </li>
                    <li>설명..? </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;