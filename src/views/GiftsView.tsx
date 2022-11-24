import React from "react";
import {GiftsList} from "../Components/Gifts/GiftsList";
import {AddGift} from "../Components/AddGift/AddGift";
import {Link} from "react-router-dom";

export const GiftsView = () => (
    <>
        <GiftsList/>
        <AddGift/>
    </>
)