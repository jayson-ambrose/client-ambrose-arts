import React, { useState } from "react";
import GalleryModal from "./GalleryModal";

export default function GalleryPiece ({ piece }) {

    const [galleryModal, setGalleryModal] = useState(false)

    const handleSetGalleryModal = () => {
        setGalleryModal(true)
    }

    return (
        <div onClick={() => handleSetGalleryModal()} 
            className='flex flex-col m-5 drop-shadow-2xl bg-offwhite rounded-xl cursor-pointer 
                overflow-hidden select-none'>
            <h1 className="font-forum font-semibold bg-darkbrown text-offwhite text-center text-xl">{piece.title}</h1>
            <div className='flex' key={piece.id}>
                <img draggable='false'  className='h-32 w-auto m-10' src={piece.img_url}/>
                <h1 className="py-10 pr-10">{piece.price}</h1>                
            </div>
            <GalleryModal galleryModal={galleryModal} setGalleryModal={setGalleryModal} piece={piece}/>
        </div>
    )
}