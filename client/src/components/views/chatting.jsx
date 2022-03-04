import React, { Component } from 'react'
import '../../utils/chatting/chat.css'

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