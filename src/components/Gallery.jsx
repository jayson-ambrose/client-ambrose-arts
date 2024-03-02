import React, { useState, useEffect } from "react";
import GalleryPiece from "./GalleryPiece";
import Heading from "./Heading";
import ThemedSearchbar from "./ThemedSearchbar";

export default function Gallery () {

    const [pieces, setPieces] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetchPieces()
    }, [])

    async function fetchPieces () {
        const resp = await fetch('http://localhost:3000/pieces')

        if (resp.ok) {
            setPieces(await resp.json())
        } else {
            console.log(resp.status + ': ' + resp.statusText)
        }        
    }

    const handleSetSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const renderedPieces = pieces.filter((piece) => piece.title.toLowerCase()
        .includes(searchValue.toLowerCase()))
        .map((piece)=>{        
            return (
                <GalleryPiece key={piece.id} piece={piece}/>
            )
    })

    console.log(searchValue)

    return (
        <div className="flex flex-col items-center">
            <Heading name='Gallery'/>
            <ThemedSearchbar
                placeholder='Filter gallery...' 
                name='search'
                controlCallback={handleSetSearchValue}
                controlValue={searchValue}/>
            <div className='flex flex-wrap'>       
                {renderedPieces}
            </div>               
        </div>
    )
}