import React from "react";
import {ChildEntity, GiftEntity } from "types";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

export const ChildTableRow = (props: Props) => {

    return (
    <tr>
        <th>{props.child.name}</th>
        <td>{props.child.giftId}</td>
    </tr>
    )
}