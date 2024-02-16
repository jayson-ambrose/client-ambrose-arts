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
        
        <>                  
            <div className='h-3/4 w-3/4 bg-lightbrown fixed drop-shadow-4xl 
                    bg-offwhite rounded-xl border-2 border-lightbrown backdrop-blur-lg filter-none' 
                ref={newRef}>
                    <h1>Hello World</h1>
            </div>
            <div className='size-full h-screen blur fixed'/>  
        </>
    )
}

//current bugs... trying to surround modal in a blurred background which, when clicked will close the modal and nothing else.