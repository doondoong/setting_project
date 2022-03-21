import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../_action/user_action'

export default function(SpecificComponent, option, adminRoute = null) {

    // option
    // null => 아무나
    // true => 로그인한 유저만
    // false => 로그인한 유저는 출입 불가능

    //adminRoute
    // null(기본값) => 
    function AuthenticationCheck(props) {
        const navigate = useNavigate()
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(auth()).then(response => {
                console.log(response)
                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    //로그인한 유저만 접근가능한 곳이라면 로그인페이지로 보내라
                    if(!!option) {
                        navigate('/login')
                    }
                } else {
                    //로그인 한 상태
                    //관리자만 접속할 수 있는 페이지에 관리자가 아닌 사람이 접속했을 경우 렌딩으로 보내라 
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/')
                    } else {
                        //로그인한 유저가 로그인하지 않은 상태에만 접속하는 페이지로 갈경우 랜딩으로 보내라
                        if(option === false) {
                            navigate('/')
                        }
                    }
                }
            })
        },[])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}

