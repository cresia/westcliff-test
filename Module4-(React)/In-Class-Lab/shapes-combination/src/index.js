import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./barchart/BarChart";
import { render } from "react-dom";
import Tree from "./collapsible-tree/Tree";
import data from "./collapsible-tree/data";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./sphere/Scene";

const App = () => {
  return <Tree data={data} width={600} height={500} />;
};

function Example() {
  const { width, height } = useViewportSize();
  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

render(<div>
<App />
<BarChart />
{/* <Example /> */}

</div>, document.getElementById("root"));


