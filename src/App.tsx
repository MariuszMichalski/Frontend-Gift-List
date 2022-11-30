import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {Header} from "./Components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";

export const App = () => {
    return (
    <>
        <Header/>
        <hr/>
        <Routes>
            <Route path="/gift" element={<GiftsView/>} />
            <Route path="/gift/:giftId" element={<SingleGiftView/>} />
            <Route path="/test" element={<TestView/>} />
            <Route path="*" element={<NotFoundView/>} />
        </Routes>
    </>
    )
}

