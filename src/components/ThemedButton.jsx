import React from "react";

export default function ThemedButton({ text, callback=()=>console.log('no callback provided') }) {

    return (
        <button 
            onClick={() => callback()}
            className={` h-8 w-32 bg-mid text-offwhite rounded line-clamp-1 hover:bg-light`}>
                {text}
        </button>
    )
}