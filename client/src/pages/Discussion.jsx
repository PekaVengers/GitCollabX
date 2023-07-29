import { useState } from "react";
import "../styles/Discussion.css";

export default function Discussion() {
  const [discussionMessages, setDiscussionMessages] = useState(JSON.parse(localStorage.getItem("discussionItems")) || [
    "Hi everyone! I'm a web developer with experience in React and Node.js. Is anyone interested in collaborating on a web app project?",
    "Hey there! I'm a UX/UI designer. I'd love to join your team and work on creating an intuitive and visually appealing interface for the app.",
    "Count me in! I specialize in backend development with Django. I can handle the server-side tasks and API integration.",
    "Sounds interesting! I'm a content writer and can help with creating engaging copy for the website and marketing materials.",
    "I'm a mobile app developer experienced in React Native. I can handle the mobile app development side of things. Let's make this app cross-platform!",
    "Great to see such a diverse skill set! We should set up a call to discuss the project details and divide tasks accordingly. How about tomorrow at 3 PM GMT?",
    "That works for me! I'll create a Trello board to keep track of the tasks and progress. We can all collaborate there.",
    "Awesome! I'll start sketching some wireframes and share them on the Trello board before the call.",
    "I'll research the target audience and competitors to come up with some compelling content ideas.",
    "Meanwhile, I'll set up the project repository on GitHub and share the link with everyone.\n\nLet's have a quick sync-up call before starting the project to clarify any doubts and plan the next steps. Looking forward to working with all of you! 🚀",
  ]);

  const [message, setMessage] = useState("");
  function sendMessage() {
    setMessage("");
    localStorage.setItem('discussionItems', JSON.stringify([...discussionMessages, message]));
    setDiscussionMessages(prevMessages => [...prevMessages, message]);
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="discuss-page-container">
      <div className="heading">
        <h1 className="discuss-page-heading">DISCUSSION</h1>
      </div>
      <div className="discussContainer">
        <div className="discussions-container">
          {discussionMessages.map((discussion, ind) => {
            return (
              <div
                key={ind}
                className={
                  "discussion-container " +
                  (ind % 2 === 0 ? "sent" : "received")
                }
              >
                {discussion}
              </div>
            );
          })}
          <div className="chat-input-container">
            <textarea
              id="message-input"
              className="chat-input"
              placeholder="Type your message..."
              onChange={handleChange}
              value={message}
            ></textarea>
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
