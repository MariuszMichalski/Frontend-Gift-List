import React, {useEffect, useState} from "react";
import {GetSingleGiftRes} from "types";
import {useParams} from "react-router-dom";

export const SingleGiftView = () => {
    const [giftInfo, setGiftInfo] = useState< GetSingleGiftRes | null>(null)
    const {giftId} = useParams();

    useEffect(() => {

        (async () => {

            const res = await fetch(`http://localhost:3000/gift/${giftId}`);
            setGiftInfo(await res.json())

        })();

    }, [])

    if (giftInfo === null) {
        return null;
    }

    return <>
        <h1>{giftInfo.gift.name}</h1>
        <p>This gift has ID {giftInfo.gift.id}. We had {giftInfo.gift.count} of this item and {giftInfo.givenCount} were already given</p>
    </>
}