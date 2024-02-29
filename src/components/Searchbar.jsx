import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function Searchbar ({
    placeholder=null,
    name,
    controlCallback,
    controlValue
}) {

    return (
        <div>
            <label htmlFor={name} className="relative text-gray-400 focus-within:text-black block">
                <MagnifyingGlassIcon className="h-6 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-1"/>
                <input
                    className='border-2 rounded-2xl w-96 pl-10 font-philosopher text-lg' 
                    type='text'
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => controlCallback(e)}
                    value={controlValue}
                    autoComplete="off"
                    >
                </input>
            </label>             
        </div>
            
    )
}