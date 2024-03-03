import React, { useState } from "react";
import GalleryModal from "./GalleryModal";

export default function GalleryCard ({ piece }) {

    const [galleryModal, setGalleryModal] = useState(false)

    const handleSetGalleryModal = () => {
        setGalleryModal(true)
    }

    return (
        <div onClick={() => handleSetGalleryModal()} 
            className='flex flex-col m-5 drop-shadow-lg bg-offwhite rounded cursor-pointer 
                overflow-hidden select-none border-slate-300 border-2'>
            <h1 className="font-philosopher font-semibold bg-offwhite text-center text-xl">{piece.title}</h1>
            <div className='flex' key={piece.id}>
                <img draggable='false'  className='h-32 w-auto m-10' src={piece.img_url}/>
                <h1 className="py-10 pr-10">{` $${(piece.price / 100)}`}</h1>                
            </div>
            <GalleryModal galleryModal={galleryModal} setGalleryModal={setGalleryModal} piece={piece}/>
        </div>
    )
}