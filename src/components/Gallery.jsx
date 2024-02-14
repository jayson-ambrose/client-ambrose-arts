import React, { useState, useEffect } from "react";
import Piece from "./Piece";

export default function Gallery () {

    const [pieces, setPieces] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/pieces')
        .then(resp => resp.json())
        .then(data => setPieces(data))
    }, [])

    const renderedPieces = pieces.map((piece)=>{
        
        return (
            <Piece key={piece.id} piece={piece}/>
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