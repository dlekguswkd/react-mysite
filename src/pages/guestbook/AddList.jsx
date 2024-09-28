//import 라이브러리
import React, {useEffect, useState} from 'react';
import axios from 'axios';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
import ItemGuest from './ItemGuest';

//import css
import '../../css/guestbook.css';


const AddList = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [content, setContent] = useState('');
    const [guestList, setGuestList] = useState([]);

	/*---일반 메소드 -----------------------------------------*/
    const getGuestList = ()=> {

        // 서버로 데이터 전송
        axios({
            method: 'get', // put, post, delete
            url: 'http://localhost:9000/api/guestbooks',

            // params: guestbookVo, // get delete 쿼리스트링(파라미터)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            setGuestList(response.data.apiData);

        }).catch(error => {
            console.log(error);
        });

    }

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 마운트됐을때
    useEffect(()=>{
        console.log("마운트 됐어요");
        getGuestList();

    }, []);
    

    // 이름
    const handleName = (e)=>{
        setName(e.target.value);
    }

    // 패스워드
    const handlePw = (e)=> {
        setPw(e.target.value);
    }

    // 내용
    const handleContent = (e)=> {
        setContent(e.target.value);
    }

    // 등록버튼 눌렀을때
    const handleAdd = (e)=> {
        e.preventDefault();
        console.log("등록버튼 클릭");

        const guestVo = {
            name: name,
            password: pw,
            content: content
        }
        console.log(guestVo);

        // 서버로 데이터 전송
        axios({
            method: 'post', // 저장 (등록)
            url: 'http://localhost:9000/api/guestbooks',

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put

            data: guestVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타

            if (response.data.result ==='success') {
                // 리다이렉트
                getGuestList();
                setName('');
                setPw('');
                setContent('');
            
            }else {
                alert("등록실패");
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
                            <form action="" method="" onSubmit={handleAdd}>
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
                                            <td><input id="input-uname" type="text" name="name" value={name} onChange={handleName} /></td>
                                            <th><label className="form-text" for="input-pass">패스워드</label></th>
                                            <td><input id="input-pass" type="password" name="password" value={pw}  onChange={handlePw} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"><textarea name="content" cols="72" rows="5" value={content} onChange={handleContent} ></textarea></td>
                                        </tr>
                                        <tr className="button-area">
                                            <td colSpan="4" class="text-center"><button type="submit">등록</button></td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                                {/* <!-- //guestWrite --> */}
                                <input type="hidden" name="action" value="add" />
                                
                            </form>	
                            
                            {guestList.map((guestbookVo)=> {
                                return (
                                    <div key={guestbookVo.no}>
                                        <ItemGuest guest={guestbookVo} />
                                    </div>
                        

                                )
                            })}
                            
                            
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