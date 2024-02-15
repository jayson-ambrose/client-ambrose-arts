import React, { useRef, useEffect } from "react";

export default function GalleryModal ({ setGalleryModal }) {

    const newRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousdown', handleOutsideClick)
        }
    })

    const handleOutsideClick = (e) => {
        if(newRef.current && !newRef.current.contains(e.target)) {
            handleSetGalleryModal()
        }
    }

    const handleSetGalleryModal = () => {
        setGalleryModal(false)
    }

    return (
        <div className='h-2/3 w-2/3 bg-lightbrown fixed' ref={newRef}>
                <h1>Hello World</h1>
        </div>
    )
}