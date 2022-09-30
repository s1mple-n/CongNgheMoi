import "./Chatbox.css"
import { faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {  faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Icon } from '@iconify/react';
function Chatbox(props){
    const [formIsValid, setFormIsValid] = useState(false);
    const [enterMessage, setEnterMessage] = useState();
    function messageChangeHandle(event){
        setEnterMessage(event.target.value);
        setFormIsValid(event.target.value.trim().length>0);
        
    }
    return (
        <div style={{width: '100%',height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="Chat_top" style={{height:'10%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div className="Chat_top_left" style={{display: 'flex',flexDirection: 'row', alignItems: 'center',flexGrow:"8"}}>
                    <img src="../images/avt.jpg" alt="" style={{width:'50px',borderRadius:'50%',padding:"1%"}}/>
                    <h3>Nguyen van A</h3>
                </div>
                <div className="Chat_top_right">
                    <FontAwesomeIcon icon={faPhone} />  
                    <FontAwesomeIcon icon={faVideo} style={{paddingLeft:'20px',marginRight:'20px'}}/>
                </div>
            </div>
            <div className="chat-box" style={{width:'100%',height:'82vh',backgroundColor:'lightgrey'}}>
                
            </div>
            <div className="chat-bottom" style={{width:'100%',height:'8vh',display: 'flex', flexDirection: 'row',}}>
                <form>
                    <button style={{border:"none",paddingLeft:"10px"}}><Icon icon="fluent:sticker-add-20-regular" /></button>
                    <button style={{border:"none",paddingLeft:"10px"}}><FontAwesomeIcon icon={faImage}/></button>
                    <textarea className="ChatBox_input" placeholder="Nhập tin nhắn" value={enterMessage} onChange={messageChangeHandle} style={{width:"980px",marginLeft:"10px",border:"0",WebkitAppearance:"none",resize:"none"}} />
                    <button disabled={!formIsValid}><FontAwesomeIcon icon={faPaperPlane} style={{paddingLeft:"10px"}} type="submit"/></button>
                </form>
                
            </div>
    </div>
    )
}

export default Chatbox;