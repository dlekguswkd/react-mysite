//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';	
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css
import '../../css/user.css';


const JoinOk = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <div id="wrap">

                <div id="header" className="clearfix">
                    <h1>
                        <Link to="" rel="noreferrer noopener">MySite</Link>
                    </h1>

                    {/* <!-- 
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><Link to="" rel="noreferrer noopener" className="btn_s">로그아웃</Link></li>
                        <li><Link to="" rel="noreferrer noopener" className="btn_s">회원정보수정</Link></li>
                    </ul>
                    -->	 */}
                    <ul>
                        <li><Link to="" rel="noreferrer noopener" className="btn_s">로그인</Link></li>
                        <li><Link to="" rel="noreferrer noopener" className="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>
                {/* <!-- //header --> */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                        <li><Link to="" rel="noreferrer noopener">게시판</Link></li>
                        <li><Link to="" rel="noreferrer noopener">갤러리</Link></li>
                        <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="joinOK">
                            
                                <p className="text-large bold">
                                    회원가입을 축하합니다.<br />
                                    <br />
                                    <Link to="/user/loginform" rel="noreferrer noopener" >[로그인하기]</Link>
                                </p>
                                    
                            </div>
                            {/* <!-- //joinOK --> */}
                        </div>
                        {/* <!-- //user --> */}
                    </div>
                    {/* <!-- //content  --> */}
                </div>
                {/* <!-- //container  --> */}


                <div id="footer">
                    Copyright ⓒ 2020 황일영. All right reserved
                </div>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}

        </>
    );
}

export default JoinOk;