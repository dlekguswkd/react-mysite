//import 라이브러리
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css  전역에 적용되지만 #user 아래만 적용되도록 css를 코딩했음
import '../../css/user.css';


const LoginForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [id, setId] = useState("");   // 화면 바꾸는 역할
    const [pw, setPw] = useState("");

    const navigate = useNavigate();


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 아이디 입력했을때
    const handleId = (e)=> {
        setId(e.target.value);
    }

    // 패스워드 입력했을때
    const handlePw = (e)=> {
        setPw(e.target.value);
    }

    // 로그인버튼 클릭했을때 (전송)
    const handleLogin = (e)=> {
        // 이벤트 잡기
        e.preventDefault(); 

        // 데이터 모으고 묶기
        const userVo= {
            id: id,
            password: pw
        }
        console.log(userVo);

        // 서버로 데이터 전송
        axios({
            method: 'post', // put, post, delete  데이터 보내기 -> post
            url: 'http://localhost:9000/api/users/login',

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put

            data: userVo, // put, post, JSON(자동변환됨)


            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            JSON.stringify(response.data.apiData);  // 자바언어(js)를 json으로 해주는 그래야 브라우저에서 알아봄

            // 헤더에서 토큰꺼내기                           공백으로 자르고 다음첫번째방쓰겠다
            const token = response.headers['authorization'].split(' ')[1];
            console.log(token);

            // 로컬스토리지에 토큰저장 -> 페이지마다 토큰을 들고다니기 귀찮으니까 따로 저장하는
            localStorage.setItem("token", token);
            
            // 로컬스토리지에 authUser 저장
            localStorage.setItem("authUser", JSON.stringify(response.data.apiData));

            // 응답처리
            if (response.data.result ==='success') {
                // 리다이렉트
                navigate("/");       
                
            }else {
                alert("로그인 실패");
            }

        }).catch(error => {
            console.log(error);
        });

    };


    return (
        <>
            <div id="wrap">

                
                {/* <!-- header + nav import --> */}
                <Header />
                {/* <!-- //header + nav --> */}


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
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="" onSubmit={handleLogin}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} onChange={handleId} placeholder="아이디를 입력하세요" />
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                        <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요" />
                                    </div>

                                    
                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>
                                    
                                </form>
                            </div>
                            {/* <!-- //loginForm --> */}
                        </div>
                        {/* <!-- //user --> */}
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

export default LoginForm;