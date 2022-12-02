import {NavLink} from "react-router-dom";
import React from "react";

export const Header = () => {

    const colorLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'black'})

    return (
        <>
            <h1>Gifts App</h1>
            <h3>Menu: <NavLink style={colorLink} to="/child">Children!</NavLink> | <NavLink style={colorLink} to="/gift">Gifts!</NavLink>
            </h3>
        </>
    )
}
