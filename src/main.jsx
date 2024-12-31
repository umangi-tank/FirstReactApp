/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import Component1 from "./Lec2412/Component1";
import InputTest from "./Lec2412/Component3";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputTest/>

  </StrictMode>
);
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateABC from "./lec3012/statemgmt1";
// import StateXYZ from "./lec3012/statemgmt2";
import StateMerge from "./LEC-30-12/StateSegment3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateMerge />
  </StrictMode>
);