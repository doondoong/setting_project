import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_action/user_action'

function LoginPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //리랜더 방지
        event.preventDefault()

        let body = {
            email,
            password
        }
//loginUser는 액션명
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('Error˝')
                }
            })
    }
    const onClick = () => {
        navigate('/register')
    }

   return (
       <>
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '90vh'
    }}>
        <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}
        >
            <label>Email</label>
            <input type={'email'} value={email} onChange={onEmailHandler} />
            <label>Password</label>
            <input type={'password'} value={password} onChange={onPasswordHandler} />
            <br />
            <button>
                Login
            </button>
            <br />
        </form>
    </div>
    <div style={{display: 'flex', flexDirection: 'column',
    justifyContent: 'flex-start', alignItems:'center'}}>
    <button  onClick={onClick}>
                회원가입
        </button>
    </div>
    </>
   )
}

export default LoginPage