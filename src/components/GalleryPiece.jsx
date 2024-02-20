import React, { useState } from "react";
import GalleryModal from "./GalleryModal";

export default function GalleryPiece ({ piece }) {

    const [galleryModal, setGalleryModal] = useState(false)

    const handleSetGalleryModal = () => {
        setGalleryModal(true)
    }

    return (
        <div>
            <div key={piece.id}>
                <img onClick={() => handleSetGalleryModal()} className={'block h-96 w-auto'} src={piece.img_url}/>
                <h2 className={`text-2xl px-8 pt-2 font-advent`}>{piece.title}</h2>
                <GalleryModal galleryModal={galleryModal} setGalleryModal={setGalleryModal} piece={piece}/>
            </div>
        </div>
    )
}