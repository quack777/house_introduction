import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";

ReactDOM.render(
    <>
        <GlobalStyle />
        <Router />
    </>,
    document.getElementById("root"),
);
