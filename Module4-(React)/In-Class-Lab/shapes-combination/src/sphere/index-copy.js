import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

function Example() {
  const { width, height } = useViewportSize();
  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(

<div>
  <Example />
</div>, rootElement

);

