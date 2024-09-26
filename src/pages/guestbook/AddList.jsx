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


const AddList = () => {

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
                        
                        <div id="content-head" className="clearfix">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="guestbook">
                            <form action="" method="">
                                <table id="guestAdd">
                                    <colgroup>
                                        <col style={{width: '70px'}} />
                                        <col />
                                        <col style={{width: '70px'}} />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th><label className="form-text" for="input-uname">이름</label></th>
                                            <td><input id="input-uname" type="text" name="name" /></td>
                                            <th><label className="form-text" for="input-pass">패스워드</label></th>
                                            <td><input id="input-pass" type="password" name="password" /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"><textarea name="content" cols="72" rows="5"></textarea></td>
                                        </tr>
                                        <tr className="button-area">
                                            <td colSpan="4" class="text-center"><button type="submit">등록</button></td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                                {/* <!-- //guestWrite --> */}
                                <input type="hidden" name="action" value="add" />
                                
                            </form>	
                            
                            <table className="guestRead">
                                <colgroup>
                                    <col style={{width: '10%'}} />
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '10%'}} />
                                </colgroup>
                                <tr>
                                    <td>1234555</td>
                                    <td>이정재</td>
                                    <td>2020-03-03 12:12:12</td>
                                    <td><Link to="" rel="noreferrer noopener">[삭제]</Link></td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="text-left">방명록 글입니다. 방명록 글입니다.</td>
                                </tr>
                            </table>
                            {/* <!-- //guestRead --> */}
                            
                            <table className="guestRead">
                                <colgroup>
                                    <col style={{width: '10%'}} />
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '40%'}} />
                                    <col style={{width: '10%'}} />
                                </colgroup>
                                <tr>
                                    <td>1234555</td>
                                    <td>이정재</td>
                                    <td>2020-03-03 12:12:12</td>
                                    <td><Link to="" rel="noreferrer noopener">[삭제]</Link></td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="text-left">방명록 글입니다. 방명록 글입니다.</td>
                                </tr>
                            </table>	
                            {/* <!-- //guestRead --> */}
                            
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

export default AddList;