import {Link} from "react-router-dom";
import React from "react";

export const Header = () => {
    return <>
        <h1>Gifts App</h1>
        <h3>Menu: <Link to="/test">Test!</Link> | <Link to="/gift">Gifts!</Link>
        </h3>
    </>
}
