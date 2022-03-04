import React,{useEffect, Component, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
import CHATTING from '../chatting'


function LandingPage() {

    const navigate = useNavigate()
    const [view, setView] = useState(false)
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

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

    const gochat = () => {
        setView(!view)
    }

   return (
       <div style={{
           display: 'flex', justifyContent: 'center', alignItems: 'center'
           , width: '100%', height: '100vh'
       }}>
           <h2>시작 페이지</h2>

           <button onClick={onClickHandler}>
               로그아웃
           </button>
           <button onClick={gochat}>
                {view ? '채팅 종료' : '채팅 접속'}
           </button>
           {view ? <CHATTING /> : null}
       </div>
   )
}

export default LandingPage