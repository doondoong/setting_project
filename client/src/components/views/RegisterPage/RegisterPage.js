import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_action/user_action'

function RegisterPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //리랜더 방지
        event.preventDefault()

        if(password !== confirmPassword) {
            return alert('비밀번호가 다릅니다.')
        }

        let body = {
            email,
            password,
            name,
        }

//loginUser는 액션명
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    navigate('/login')
                } else {
                    alert('Failed to sign up')
                }
            })
    }
    const goLogin = () => {
        navigate('/login')
    }
   return (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
    }}>
        <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}
        >
            <label>Email</label>
            <input 
            type={'email'} 
            value={email} 
            onChange={onEmailHandler} />

            <label>Name</label>
            <input 
            type={'text'} 
            value={name} 
            onChange={onNameHandler} />

            <label>Password</label>
            <input 
            type={'password'} 
            value={password} 
            onChange={onPasswordHandler} />

            <label>Confirm Password</label>
            <input 
            type={'password'} 
            value={confirmPassword} 
            onChange={onConfirmPasswordHandler} />

            <br />
            <button>
                회원가입
            </button>
            <br />
            <br />
            <input 
            type={'button'}
            onClick={goLogin}
            value={'goLogin'}>
            </input>
        </form>
    </div>
   )
}

export default RegisterPage