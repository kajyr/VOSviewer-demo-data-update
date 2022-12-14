import React, { useState } from "react";
import { VOSviewerOnlineDimensions } from "vosviewer-online/dimensions";
import dataset1 from "./dataset-1";
import dataset2 from "./dataset-2";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [largest, setLargest] = useState(true);

  return (
    <div>
      <div style={{ margin: "2rem 0" }}>
        <button onClick={() => setToggle(!toggle)}>
          Load a different dataset
        </button>
        <button onClick={() => setLargest(!largest)}>
          Toggle largest_component option
        </button>
      </div>
      <div style={{ width: "100%", maxHeight: "500px", height: "50vh" }}>
        <VOSviewerOnlineDimensions
          data={toggle ? dataset1 : dataset2}
          parameters={{
            largest_component: largest,
            looker_ui: true,
            simple_ui: true,
          }}
        />
      </div>
    </div>
  );
};

export default App;
