import React, { useState } from 'react';
import './index.css';

const goToRoom = (history, roomId) => {
  history.push(`/${roomId}`)
}


export default function GoToRoomInput({history, id}) {
  let [roomId, setRoomId] = useState("");
console.log(roomId)
  return (<div className="enter-room-container">
    <form>
          {/* <input type="text" value={id} placeholder="Room id" onChange={(event) => {
            setRoomId(event.target.value)
          }}/> */}
          <button className="button-contact" onClick={() => {
            goToRoom(history, id)
          }}>Contacter ce conseiller</button>
          </form>
        </div>)
}