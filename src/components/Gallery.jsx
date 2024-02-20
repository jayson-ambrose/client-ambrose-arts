import React, { useState, useEffect } from "react";
import GalleryPiece from "./GalleryPiece";

export default function Gallery () {

    const [pieces, setPieces] = useState([])

    async function fetchPieces () {
        const resp = await fetch('http://localhost:3000/pieces')

        if (resp.ok) {
            setPieces(await resp.json())
        } else {
            console.log(resp.status + ': ' + resp.statusText)
        }
        
    }

    useEffect(() => {
        fetchPieces()
    }, [])

    const renderedPieces = pieces.map((piece)=>{
        
        return (
            <GalleryPiece key={piece.id} piece={piece}/>
        )
    })

    return (
        <div className="flex flex-col items-center ">
            <h1 className='pt-10 font-advent font-medium text-3xl'>
                Gallery
            </h1>            
            {renderedPieces}            
        </div>
    )
}