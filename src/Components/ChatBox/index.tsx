import React, {FC} from "react"
import "./styles.css";

// COMPONENTE
// ícone chat
import { RiChat2Fill } from "react-icons/ri";



const ChatBox: FC = () => {
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
