import React from "react";

export default function ThemedButton({ text, callback=()=>console.log('no callback provided') }) {

    return (
        <button 
            onClick={() => callback()}
            className={` h-8 w-32 bg-midbrown text-offwhite rounded line-clamp-1 hover:bg-lightbrown`}>
                {text}
        </button>
    )
}