//import 라이브러리
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/user.css';


const JoinForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 아이디
    const handleId =(e)=> {
        setId(e.target.value);
    }

    // 패스워드
    const handlePw =(e)=> {
        setPw(e.target.value);
    }

    // 이름
    const handleName =(e)=> {
        setName(e.target.value);
    }

    // 성별
    const handleGender =(e)=> {
        setGender(e.target.value);
    }
    

    // 회원가입버튼 클릭했을때
    const handleJoin = (e)=> {
        e.preventDefault(); 

        const userVo= {
            id: id,
            password: pw,
            name: name,
            gender: gender
        }
        console.log(userVo);

        
        // 서버로 데이터 전송
        axios({
            method: 'post',         // 저장 (등록)
            url: `${process.env.REACT_APP_API_URL}/api/users`,

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put 보낼때

            data: userVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data.result ==='success') {
                // 리다이렉트
                navigate("/user/joinok");
            
            }else {
                alert("등록실패");
            }

        }).catch(error => {
            console.log(error);
        });

    };

    // 중복체크 클릭했을때
    const handleCheck = ()=> {
        console.log("중복체크 클릭");

        const userVo= {
            id: id
        }
        console.log(userVo);

         // 서버로 데이터 전송
        axios({
            method: 'post',         // 저장 (등록)
            url: `${process.env.REACT_APP_API_URL}/api/users/${id}`,

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put 보낼때

            data: userVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data.result ==='success') {
                alert("사용가능한 아이디입니다.");
            
            }else {
                alert("이미 가입된 아이디입니다.");
            }

        }).catch(error => {
            console.log(error);
        });

    }


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
                            <div id="joinForm">
                                <form action="" method="" onSubmit={handleJoin}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} onChange={handleId} placeholder="아이디를 입력하세요" />
                                        <button type="button" id="" onClick={handleCheck}>중복체크</button>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요"	/>
                                    </div>

                                    {/* <!-- 이름 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} onChange={handleName} placeholder="이름을 입력하세요" />
                                    </div>

                                    {/* <!-- //성별 --> */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="gender" value="male" onChange={handleGender} /> 
                                        
                                        <label htmlFor="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="gender" value="female" onChange={handleGender} /> 

                                    </div>

                                    {/* <!-- 약관동의 --> */}
                                    <div className="form-group">
                                        <span className="form-text">약관동의</span> 
                                        
                                        <input type="checkbox" id="chk-agree" value="" name="" />
                                        <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label> 
                                    </div>
                                    
                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원가입</button>
                                    </div>
                                    
                                </form>
                            </div>
                            {/* <!-- //joinForm --> */}
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

export default JoinForm;