import React, { useEffect, useRef, useState } from "react"
import io from 'socket.io-client';
import TextField from "@material-ui/core/TextField"
import './chatting.css'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

// const nickname = document.querySelector('#nickname')
// const chatList = document.querySelector('.chatting-list')
// const chatInput = document.querySelector('.chatting-input')
// const sendButton = document.querySelector('.send-button')
// const displayContainer = document.querySelector('.display-container')
// const el = document.getElementsByClassName("chatting-input");
// //텍스트 박스 지우기
// function clearInput() {
//     for(var i=0; i<el.length; i++){
//         el[i].value = '';
//     }
// }

// function send() {
//     const param = {
//         name: nickname.value,
//         msg: chatInput.value
//     }
//     socket.emit('chatting', param)
// }

// //메세지 보내기 (클릭)
// sendButton.addEventListener('click', ()=> {
//     send()
//     clearInput()
// })
// //메세지 보내기 (엔터)
// chatInput.addEventListener('keypress', (event)=>{
//     if(event.keyCode === 13){
//         send()
//         clearInput()
//     }
// })

// // 메세지 받았을경우 인자로받은data는 받은 메세지, deps(채널이름,메세지)
// socket.on('chatting', (data) => {
//     // console.log(data)
//     // const li = document.createElement('li')
//     // li.innerText = `${data.name}님이 - ${data.msg}`
//     // chatList.appendChild(li)
//     const { name, msg, time } = data;
//     const item = new LiModel(name, msg, time)
//     item.makeLi()
//     displayContainer.scrollTo(0,displayContainer.scrollHeight)
// })

// function LiModel(name, msg, time){
//     this.name = name;
//     this.msg = msg;
//     this.time = time;

//     this.makeLi = () => {
//         const li = document.createElement('li');
//         li.classList.add(nickname.value === this.name ? "sent" : "received")
//         const dom = `<span class="profile">
//         <span class="user">${this.name}</span>
//         <img class="image" src="https://placeimg.com/50/50/any" alt="any">
//     </span>
//     <span class="message">${this.msg}</span>
//     <span class="time">${this.time}</span>`
//     li.innerHTML = dom;
//     chatList.appendChild(li)
//     }
// }

const url = 
process.env.NODE_ENV === 'production' ?
'https://chatting-system-no3.herokuapp.com/' :
'http://localhost:7001'

function Chatting({nickName}) {
  const [data, setData] = useState({msg: ''})
  const [chat, setChat] = useState([])

  const socketRef = useRef()
  // useEffect(() => {
  //   socketRef.current = io.connect(url,{
  //     cors: {origin: '*'}, 
  //     path: '/socket.io'
  //   })
  //   socketRef.current.on("chatting", ({msg, time}) => {
  //       // const {name, msg} = data
  //     setChat([ ...chat, {msg, time } ])
  //       })
  //       return () => socketRef.current.disconnect()
  //     },[ chat ]
  //   )

  const onTextChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = (e) => {
	  const { name, msg } = data
    // console.log(data)
    //서버로 전송 d1:서버로보낼 이벤트명, d2:데이터
		socketRef.current.emit("chatting", {msg})
		e.preventDefault()  // 리렌더 방지
		setData({ msg: "", name })
	}

	const renderChat = () => {
    // const {name, msg} = data
		return chat.map(({msg, time}, index) => (
			<div key={index}>
				<h3>
					{nickName}: <span>{msg}</span> 
				</h3>
        <h5>{time}</h5>
			</div>
		))
	}

  const myIcon = <BrightnessHighIcon />


   return (

    <div className="card">
			<form onSubmit={onMessageSubmit}>
        <h1>메세지</h1>
          <div className='name-field' style={{flexDirection:'row'}}>
            {/* <TextField 
            name="nickName" 
            // onChange={(e) => onTextChange(e)}
            value={myIcon} 
            label="Name" >
            </TextField>  */}
            <div>name</div><h2>{nickName}</h2>
            </div>
            
            <div>
              <TextField
                name="msg"
                onChange={(e) => onTextChange(e)}
                value={data.msg}
                id="outlined-multiline-static"
                variant="outlined"
                label="Message"
                
              />
            </div>
            <button>전송</button>
      </form>
        <div className="render-chat">
          <h1>내용</h1>
            {renderChat()}
        </div>
    </div>

   )
}

export default Chatting