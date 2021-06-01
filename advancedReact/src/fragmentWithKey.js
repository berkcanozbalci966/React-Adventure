import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item, key) => (
        <Fragment key={key}>
          <dt>{item.name}</dt>
          <dt>{item.description}</dt>
        </Fragment>
      ))}
    </dl>
  );
}

const ITEMS = [
  { name: "Valorant", description: "Kafadan vuruyon cs gibi" },
  { name: "CS Go", description: "Klasik oyun bilmeyen yohtur" },
  { name: "LOL", description: "Sihirli mihirli" },
  { name: "Mortal Kombat", description: "En sevdiğim organ sökmeli." },
];

ReactDOM.render(<Glossary items={ITEMS} />, document.getElementById("root"));
