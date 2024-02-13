import React from 'react';

export default function ColorBox ({ colorClass }) {

    console.log(colorClass)

    return (
        <div className={`${colorClass} box-border h-32 w-32 p-4 border-4`}>{colorClass}</div>
    )
}