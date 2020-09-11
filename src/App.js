import React from "react";
import Top from "./screens/Top"
import NaBar from "./components/NaBar";
import Quiz from "./screens/Quiz";

function app(){
    return <div className="App"></div>;
    return(
        <div className="App">
            <Quiz/>
            <NaBar/>
            <Top/>
        </div>
    );
}