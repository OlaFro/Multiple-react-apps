import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routing";
import "/home/dci/Desktop/practice-dir/REACT/to-do/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MainFuncComp from "./funcComp/MainFuncComp";

ReactDOM.render(
  // <MainFuncComp />,
  <React.StrictMode>
    <Routing />
    {/* <Main />
    <MainToDo /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
