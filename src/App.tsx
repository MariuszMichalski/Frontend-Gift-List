import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {Header} from "./Components/Header/Header";

export const App = () => {
    return (
    <>
        <Header/>
        <hr/>
        <Routes>
            <Route path="/gift" element={<GiftsView/>} />
            <Route path="/test" element={<TestView/>} />
        </Routes>
    </>
    )
}

