import React from "react";
import {GiftEntity} from "../../types/gifts";

interface Props {
    gift: GiftEntity
}

export const GiftTableRow = (props: Props) => (
    <tr>
        <th>
            {props.gift.id}
            {props.gift.name}
            {props.gift.count}
        </th>
    </tr>
)