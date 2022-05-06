import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { useSpeechSynthesis } from 'react-speech-kit';
import { SendOutlined, PictureOutlined ,VideoCameraOutlined ,AudioOutlined,PlayCircleOutlined ,MailOutlined } from '@ant-design/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };




  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const { speak } = useSpeechSynthesis();

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value )}
          value={msg||transcript}
        />
        <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
        </label>
        <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{ display: 'none' }}

        />
        <span onClick={() => speak({ text: msg })}><PlayCircleOutlined /></span>
        <label><span onClick={SpeechRecognition.startListening}><AudioOutlined className="picture-icon"/></span></label>
        <span className="image-button"><a href="https://sanphireemail.herokuapp.com/" style={{textDecoration:"none" ,color:'black'}}><MailOutlined /></a></span>
        <a href="https://sanphirevideochat.herokuapp.com" style={{textDecoration:"none" ,color:'black'}}><VideoCameraOutlined className="picture-icon"/></a>
        <button className="button1" type="submit">
          <IoMdSend />
        </button>


      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color:  color: rgb(17, 17, 17);
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: rgba(101, 250, 66, 0.15);
        box-shadow: 0 5px 10px  rgba(101, 250, 66);
        border-color:  rgba(101, 250, 66, 0.55);
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: rgba(101, 250, 66, 0.15);
          width: 5px;
          &-thumb {
            background-color:  rgba(101, 250, 66, 0.15);
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color:  rgba(101, 250, 66, 0.95);
        }
        .emoji-group:before {
          background-color:  rgba(101, 250, 66, 0.35);
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: rgba(101, 250, 66, 0.25);
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #65ee48;
      }
      &:focus {
        outline: none;
      }
    }
    .button1 {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #65ee48;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: black;
      }
    }
  }
`;
