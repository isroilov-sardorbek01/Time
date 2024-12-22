import React from "react";
import DateNow from "./components/DateNow";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return <div className="">
      <Header></Header>
      <Routes>
        <Route index element={<DateNow></DateNow>}></Route>
      </Routes>
    </div>;
}

export default App;
