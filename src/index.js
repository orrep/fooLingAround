import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import ApplicationModel from "./models/ApplicationModel";
import Application from "./components/App";

// require("font-awesome-webpack");
require('font-awesome/scss/font-awesome.scss');
 
const app = new ApplicationModel();
// <Document document={doc} />
render(
  <div>
    <DevTools />
    <Application app={app} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.app = app;
