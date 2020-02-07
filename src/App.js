import React from "react";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";
import "./styles.css";

const firstTooltip = (
  <Tooltip message="first tooltip message" color="hotpink">
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip message="another tooltip message" color="#268BCC">
    necessitisbus?
  </Tooltip>
);

export default function App() {
  return (
    <main className="App">
      <Split className="left">
        This is the content for the `left` split. Lorem {firstTooltip}
      </Split>
      <Split className="right">
        This is the content for the `right` split. Ipsum {secondTooltip}
        <Tooltip message="last tooltip message">lorem</Tooltip>
      </Split>
    </main>
  );
}
