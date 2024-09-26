//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';	
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../css/guestbook.css';


const DeleteForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <div id="wrap">

                {/* <!-- header + nav import --> */}
                <Header />
                {/* <!-- //header + nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="guestbook">
                            <form action="" method="">
                                <table id="guestDelete">
                                    <colgroup>
                                        <col style={{width: '10%'}} />
                                        <col style={{width: '40%'}} />
                                        <col style={{width: '25%'}} />
                                        <col style={{width: '25%'}} />
                                    </colgroup>
                                    <tr>
                                        <td>비밀번호</td>
                                        <td><input type="password" name="password" /></td>
                                        <td className="text-left"><button type="submit">삭제</button></td>
                                        <td><Link to="/guestbook2/gbc" rel="noreferrer noopener">[메인으로 돌아가기]</Link></td>
                                    </tr>
                                </table>
                                <input type='hidden' name="" value="" />
                                <input type='hidden' name="" value="" />
                            </form>
                            
                        </div>
                        {/* <!-- //guestbook --> */}
                    </div>
                    {/* <!-- //content  --> */}

                </div>
                {/* <!-- //container  --> */}

                {/* <!-- footer import -->  */}
                <Footer />
                {/* <!-- //footer -->  */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default DeleteForm;