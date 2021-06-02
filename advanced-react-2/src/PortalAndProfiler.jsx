import React, { Profiler, useState } from "react";
import Modal from "./components/Modal";
import ReactDOM from "react-dom";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log(
    `${id} Infos : ${Array.from(arguments).map((element) => element + "\n")} `
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Profiler id="Button" onRender={onRenderCallback}></Profiler>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}> Open Modal </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
