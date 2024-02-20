import React from "react";

export default function ThemedButton({text}) {

    return (
        <button className={` h-8 w-32 bg-midbrown text-offwhite rounded line-clamp-1 hover:bg-lightbrown`}>{text}</button>
    )
}