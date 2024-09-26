//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/user.css';


const ModifyForm = () => {

	/*---일반 변수 --------------------------------------------*/
    const token = localStorage.getItem('token');    // 로그인했을때 저장되는 토큰 꺼내쓰기
    //console.log(token);

	/*---라우터 관련------------------------------------------*/
    const navigate = useNavigate();
    

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');


	/*---일반 메소드 -----------------------------------------*/


	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 마운트 됐을때(로딩) -> 수정폼이기 때문에 회원정보 가져와야함   -> 보기폼!
    useEffect(()=>{
        console.log("마운트 되었을때"); 

        // 서버로 데이터 전송
        axios({
            method: 'get',   // 한명데이터 가져와
            url: 'http://localhost:9000/api/users/me',  // 수정폼의 역할
            headers: { "Authorization": `Bearer ${token}` },		// 토큰받기

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            const userVo = response.data.apiData
            // console.log(userVo);

            if (response.data.result === 'success') {
                // 가져온데이터 화면에 반영
                setId(userVo.id);
                setPw(userVo.password);
                setName(userVo.name);
                setGender(userVo.gender);
                
            }else {
                alert('회원정보 가져오기 실패');
            }

        }).catch(error => {
            console.log(error);
        });

    }, []);


    // 아이디 는 변경이 안됨
    // const handleId =(e)=> {
    //     setId(e.target.value);
    // }

    // 화면 바꿔주기
    // 패스워드창에 값이 변할때
    const handlePw =(e)=> {
        setPw(e.target.value);
    }

    // 이름창에 값이 변할때
    const handleName =(e)=> {
        setName(e.target.value);
    }

    // 성별창에 값이 변할때(라디오버튼)
    const handleGender =(e)=> {
        setGender(e.target.value);
    }

    // 수정버튼 클릭했을때
    const handleUpdate =(e)=> {
        e.preventDefault();
        console.log("수정버튼 클릭");

        // 바뀌는 값 모으기
        const userVo = {
            password: pw,
            name: name,
            gender: gender
        };
        console.log(userVo);

        // 서버로 데이터 전송
        axios({
            method: 'put',  // 수정
            url: 'http://localhost:9000/api/users/me',

            // 헤더 두번쓰면 안되고 합쳐서 보내줘야함
            headers: { "Content-Type": "application/json; charset=utf-8",   // post put
                        "Authorization": `Bearer ${token}`                 // 토큰받기
                    }, 	
            data: userVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            // console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') {
                // 로컬스토리지에 authUser의 이름을 변경
                const authUser = response.data.apiData      // 스프링부트에서 보내준?userVo
                // console.log(authUser);
                // console.log(JSON.stringify(authUser));              // 문자열로 교체

                localStorage.setItem('authUser', JSON.stringify(authUser));     

                // 메인으로 리다이렉트
                navigate('/');

            }else {
                alert("수정실패");
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
                            <h3>회원정보</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원정보</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="modifyForm">
                                <form action="" method="" onSubmit={handleUpdate}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <span className="text-large bold" >{id}</span>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요"	/>
                                    </div>

                                    {/* <!-- 이메일 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} onChange={handleName} placeholder="이름을 입력하세요" />
                                    </div>

                                    {/* <!-- 성별 --> */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="gender" value="male" checked={gender === 'male'} onChange={handleGender} /> 
                                        
                                        <label htmlFor="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="gender" value="female" checked={gender === 'female'} onChange={handleGender} /> 

                                    </div>

                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                    
                                </form>
                            
                            
                            </div>
                            {/* <!-- //modifyForm --> */}
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

export default ModifyForm;