import React from "react";
import ReactDOM from "react-dom";

var element;

const user = {
  name: "Berkcan",
  surName: "Özbalcı",
};

const getFullName = ({ name, surName }) => {
  return name && surName ? (
    <h1> {`Hello ${name + " " + surName}`}</h1>
  ) : (
    <h1> Hello Stranger please signup !</h1>
  );
};

function objectName(name) {
  return Object.keys({ name })[0];
}
const oyunfor = {
  img: "https://cdn.oyunfor.com/Public/standart/web/dist/img/logo.png",
};

element = (
  <div>
    <img src={oyunfor.img} alt="" />
    <h1>Hello FROM {objectName(oyunfor)}</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
