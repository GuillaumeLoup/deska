import React, { useState } from 'react';
import shortId from 'shortid';

const goToRoom = (history, roomId) => {
  history.push(`/${roomId}`)
}


export default function GoToRoomInput({history, id}) {
  let [roomId, setRoomId] = useState("");
console.log(roomId)
  return (<div className="enter-room-container">
    <form>
          <input type="text" value={id} placeholder="Room id" onChange={(event) => {
            setRoomId(event.target.value)
          }}/>
          <button onClick={() => {
            goToRoom(history, id)
          }}>Enter</button>
          </form>
        </div>)
}