import React, { Component } from 'react'
import '../../utils/chatting/chat.css'

// const socket = io();
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

function chatting() {
   return (

    <div class="wrapper">
        <div class="user-container">
            <label for="nickname">대화명</label>
            <input type="text" id="nickname" />
        </div>
        <div class="display-container">
            <ul class="chatting-list">
                
            </ul>
        </div>
        <div class="input-container">
            <span>
            <input type="text" class="chatting-input" />
            <button class="send-button">전송</button>
            </span>
        </div>
    </div>

   )
}

export default chatting