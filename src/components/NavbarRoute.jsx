import React from "react";

export default function Navbar ({ routeName }) {

    return(
        <h2 
            className='text-3xl px-8 pt-2 hover:underline cursor-pointer font-advent'>
                {routeName}
        </h2>
    )
}