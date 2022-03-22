import React,{useEffect, Component, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
import CHATTING from '../chatting'
// import { chattingWindow } from '../../../_action/user_action'
// import { useDispatch } from 'react-redux';



function LandingPage({view, onClickView, nickName}) {
    // const {loading, data, error, view : reducerView} = useSelector((state)=>state.user);
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [chatView, setChatView] = useState(false)

    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => { console.log(response) })
    // }, [])

    const onClickHandler = () => {
        axios.get('/api/user/logout')
            .then(response => {
                if(response.data.success) {
                    navigate('/login')
                } else {
                    alert('로그아웃 실패!!')
                }
            })
        }

   return (
       <div style={{
           display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'
           , width: '100%', height: '80vh'
       }}>
           <button onClick={onClickView} style={{marginBottom: '100px'}}>
                {view ? '채팅 종료' : '채팅 접속'}
           </button>
           <h2>시작 페이지</h2>

           <button onClick={onClickHandler}>
               로그아웃
           </button>
           
           {view ? <CHATTING nickName={nickName} /> : null}
       </div>
   )
}

export default LandingPage