import React from "react";

export default function Heading ({ name }) {

    return (
        <h1 className='pt-10 font-philosopher font-semibold text-3xl select-none'>
            {name}
        </h1>
    )
}