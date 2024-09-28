//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/board.css';


const WriteForm = () => {

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
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="" rel="noreferrer noopener">일반게시판</Link></li>
                            <li><Link to="" rel="noreferrer noopener">댓글게시판</Link></li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>일반게시판</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>게시판</li>
                                    <li className="last">일반게시판</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="board">
                            <div id="writeForm">
                                <form action="#" method="get">
                                    {/* <!-- 제목 --> */}
                                    <div className="form-group">
                                        <label className="form-text" for="txt-title">제목</label>
                                        <input type="text" id="txt-title" name="" value="" placeholder="제목을 입력해 주세요" />
                                    </div>
                                
                                    {/* <!-- 내용 --> */}
                                    <div className="form-group">
                                        <textarea id="txt-content"></textarea>
                                    </div>
                                    
                                    <Link to="" rel="noreferrer noopener" id="btn_cancel">취소</Link>
                                    <button id="btn_add" type="submit" >등록</button>
                                    
                                </form>
                                {/* <!-- //form --> */}
                            </div>
                            {/* <!-- //writeForm --> */}
                        </div>
                        {/* <!-- //board --> */}
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

export default WriteForm;