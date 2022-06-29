import React from 'react';

const Footer = () => {
    return (
        <div>
              <div id="footer">
                <div id="footer-info"> 
                        <div className='inner'>
                            <div>
                                <h3> 무통장 입금 계좌 </h3>
                                <p>BankAccount</p>
                                <p>309402-4542-3</p>
                                <p>예금주 - 무거나</p>
                            </div>
                            <div>
                                <h3> 고객센터 </h3>
                                <p> 영업시간 이외에는 문의 게시판을 이용해주시면 
                                    담당자 확인 후 빠른 답변 도와리겠습니ㅏ다.
                                </p>
                                <p id='tel'>02-1236-6541</p>
                            </div>
                            <div>
                                <h3>공지사항</h3>
                                <ul>
                                <li>조명 가이드 <span>2022-06-29</span></li>
                                <li>신상품 입고 안내 <span>2022-06-19</span></li>
                                <li>올 오픈을 축하드립미다.<span>2020-06-02</span></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div id="footer-copy">
                    <div className='inner'>
                        <ul>
                            <li>홈</li>
                            <li>매장안내</li>
                            <li>이용약관</li>
                            <li>개인정보처리담당</li>
                     </ul>
                    </div>
                    <div id='copyright'>
                        <div className='inner'>
                            상호 : 무거나파는곳 주소 : 울산광역시 남구 삼산종로 100번길
                            대표전화 : 국번없이 052-1234-4321 대표이사 : 무거나
                            개인정보 관리자 : 이블루 사업자 등록 번호 : 102-12-12345
                            copyright(c) Green Lamp, LTD all rights reserVed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;