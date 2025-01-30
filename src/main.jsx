/*

24-12

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import Component1 from "./Lec2412/Component1";
import InputTest from "./Lec2412/Component3";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputTest/>

  </StrictMode>
);

30-12

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

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Purefunction from "./LEC-31-12/purefunction";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
        <Purefunction abc={false}  xyz={"hello world"} />
        <Purefunction abc={false}  xyz={"howww"} />
        <Purefunction abc={false}  xyz={"areee you????? "} />
  </StrictMode>
);    

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Purefunction from "./LEC-31-12/purefunction";
import MyButton from "./LEC-31-12/purefunction";

createRoot(document.getElementById("root")).render(
  <StrictMode>
       <MyButton />
       <MyButton abc={true} def={"helllo"} />
       <MyButton abc={true} />
       <MyButton def={"xxxyyyyzzzz" } />
     </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Funcomponent from "./LEC-31-12/hookComponent";

createRoot(document.getElementById("root")).render(
);

*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import HookUseEffect from "./LEC-18-01/HookUseEffect";
//import CountDown from "./LEC-18-01/CountDown";
import ArrayOfString from "./LEC-18-01/ArrayOfString";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ArrayOfString/>
  </StrictMode>
);
