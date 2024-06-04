import React, { useState } from "react";
import ThemedButton from 'src/components/ui/ThemedButton'
import GalleryManagerModal from "./GalleryManagerModal";

export default function GalleryManagerTableEntry ({ piece }) {
    
    const [galleryManagerModal, setGalleryManagerModal] = useState(false)

    const {id, title, artist, price, category, img_url, sold, created_at, updated_at} = piece
    const columnBorderStyle = 'border border-slate-600 px-6'

    const handleEditClicked = () => {
        setGalleryManagerModal(true)
    }

    return (
        <>
        <tr className="border border-slate-600">
            <td className={columnBorderStyle}>{id}</td>
            <td className={columnBorderStyle}>{title}</td>
            <td className={columnBorderStyle}>{artist.name}</td>
            <td className={columnBorderStyle}>{price}</td>
            <td className={columnBorderStyle}>{category}</td>
            <td className={columnBorderStyle}>{img_url}</td>
            <td className={columnBorderStyle}>{sold ? 'yes' : 'no'}</td>
            <td className={columnBorderStyle}>{created_at}</td>
            <td className={columnBorderStyle}>{updated_at ? updated_at : 'NA'}</td>
            <td>
                <ThemedButton text={'Edit'} callback={handleEditClicked}/>
                <GalleryManagerModal
                    piece={piece} 
                    galleryManagerModal={galleryManagerModal} 
                    setGalleryManagerModal={setGalleryManagerModal}/>            
            </td>
        </tr>
        </>         
        
    )
    
}