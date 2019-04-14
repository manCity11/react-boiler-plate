import { defaultTemplate } from "./commons/funnel/funnel";
import { withRouter } from "react-router-dom";
import { App } from "./App";

defaultTemplate({ language: "fr" })(withRouter(App));
