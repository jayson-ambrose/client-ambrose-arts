import React from "react";

export default function Heading ({ name }) {

    return (
        <div className="w-full flex justify-center bg-offwhite">
            <h1 className='py-5 font-philosopher font-semibold text-3xl select-none'>
                {name}
            </h1>
        </div>
    )
}