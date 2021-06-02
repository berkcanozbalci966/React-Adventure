import React, { Component, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";
// Deep Techniques JSX

const MyButton = React.createElement(
  "button",
  {
    color: "blue",
    border: "5px solid black",
  },
  `Click mee!`
);

const MyComponents = {
  Ch1: function Ch1(props) {
    return <h1>This is h1 tag my friend {props.content} </h1>;
  },
  Ch2: function Ch2(props) {
    return <h2>This is h2 tag my friend {props.content} </h2>;
  },
};

const components = {
  photo: PhotoStory,
  video: VideoStory,
};

function Story(props) {
  const SpecificStory = components[props.storyType];

  return <SpecificStory story={props.story} />;
}

function PhotoStory(props) {
  return <h1> PHOTO : {props.story}</h1>;
}

function VideoStory(props) {
  return <h1> VİDEO : {props.story}</h1>;
}

function NumberDescriber(props) {
  let description;

  description =
    props.number % 2 === 0 ? <strong>even</strong> : (description = <i>odd</i>);
  return (
    <div>
      {" "}
      {props.number} is an {description} number{" "}
    </div>
  );
}

function SayHello(props) {
  const { name, surName } = props;
  return <p>Hello {name + " " + surName} </p>;
}

// Speared Props
function SpearedProps() {
  const props = { name: "Berkcan", surName: "Özbalcı" };
  return <SayHello {...props} />;
}

const Button = (props) => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={className} {...other}>
      {other.name}
    </button>
  );
};

// Child Component Function
function Repeat(props) {
  let items = [];
  for (let i = 1; i < props.numTimes + 1; i++) {
    items.push(<h1> {props.children(i)} </h1>);
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        {MyButton}
        <div>
          <MyComponents.Ch1 content="Yes" />
          <MyComponents.Ch2 content="Yes" />
          <br />
          <br />
          <Story storyType={"photo"} story="Deneme" />
          <br />
          <br />
          <br />
          <NumberDescriber number={3} />
          <hr />
          <br />
          <SpearedProps />
          <hr />
          <br />
          <Button kind="yea" name="Yes" />
          <hr />
          <br />
          <ListOfTenThings />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
