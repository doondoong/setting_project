import React from 'react'
import LandingPage from '../views/LandingPage/LandingPage'
import { useDispatch, useSelector } from 'react-redux'
import { chattingWindow } from '../../_action/user_action'


function LandingPageContainer() {
    const myView = useSelector(state => (
        console.log(state),{
       view: state.user.view,
       nickName: state.user.userData.name
    }))
    const dispatch = useDispatch()
    const onClickView = () => dispatch(chattingWindow(myView))
    return <LandingPage 
    view={myView.view} 
    onClickView={onClickView}
    nickName={myView.nickName}
    />
}

export default LandingPageContainer