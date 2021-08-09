import React from "react"
import "./styles.css";

// COMPONENTE
// ícone chat
import { RiChat2Fill } from "react-icons/ri";



function ChatBox() {
    return (
        <>
            <div className="chatbox">
                <a href="#">
                    <RiChat2Fill />
                </a>
            </div>
        </>
    )
}

export default ChatBox
