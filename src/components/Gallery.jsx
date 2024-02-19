import React, { useState, useEffect } from "react";
import GalleryPiece from "./GalleryPiece";
import GalleryModal from "./GalleryModal";

export default function Gallery () {

    const [pieces, setPieces] = useState([])
    const [galleryModal, setGalleryModal] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/pieces')
        .then(resp => resp.json())
        .then(data => setPieces(data))
    }, [])

    const renderedPieces = pieces.map((piece)=>{
        
        return (
            <GalleryPiece key={piece.id} piece={piece} setGalleryModal={setGalleryModal}/>
        )
    })

    return (
        <div className="flex flex-col items-center ">
            <h1 className='pt-10 font-advent font-medium text-3xl'>
                Gallery
            </h1>
            {galleryModal ? <GalleryModal galleryModal={galleryModal} setGalleryModal={setGalleryModal}/> : null}
            {renderedPieces}            
        </div>
    )
}