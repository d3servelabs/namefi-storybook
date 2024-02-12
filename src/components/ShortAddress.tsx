import React from "react";

export function ShortAddress({address}) {
    return <>{address.slice(0, 7)}
        &bull;&bull;&bull;&bull;
        {address?.slice(37, 42)}</>
}