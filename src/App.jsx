import React from "react";
import DateNow from "./components/DateNow";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Time from "./components/Time";

function App() {
    return (
        <div className="">
            <Header></Header>
            <Routes>
                <Route index element={<DateNow></DateNow>}></Route>
                <Route path="/2" element={<Timer></Timer>}></Route>
                <Route path="/3" element={<Time></Time>}></Route>
            </Routes>
        </div>
    );
}

export default App;
