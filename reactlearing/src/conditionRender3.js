import React from "react";
import ReactDOM from "react-dom";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && (
        <h2>{unreadMessages.length} adet okunmamış mesajınız var.</h2>
      )}
    </div>
  );
}

const messages = [
  "Oyunfor şifremi unuttum",
  "Kolay epin yaptık",
  "React öğreniyoz",
];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("root")
);
