import React, {useEffect, useState} from 'react';

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState(null)

    useEffect(() => {
        (async () => {

            const res = await fetch('http://localhost:3001/gift')
            const data = await res.json();
            console.log(data)

        })();
    },[])

    if (giftsList === null) {
        return (
            <p>Wczytywanie</p>
        )
    }

    return null;
}