import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {ChildView} from "./views/ChildView";
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
            <Route path="/child" element={<ChildView/>} />
            <Route path="*" element={<NotFoundView/>} />
        </Routes>
    </>
    )
}

