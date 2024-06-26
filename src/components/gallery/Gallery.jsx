import React, { useState, useEffect } from "react";
import GalleryCard from "src/components/gallery/GalleryCard";
import Heading from "../ui/Heading";
import ThemedSearchbar from "src/components/ui/ThemedSearchbar";
import { useRecoilValue } from "recoil";
import { urlPrefix } from "/public/helpers.js";

export default function Gallery () {

    const [pieces, setPieces] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetchPieces()
    }, [])

    async function fetchPieces () {
        const resp = await fetch(`${urlPrefix}/pieces`)

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
                <GalleryCard key={piece.id} piece={piece}/>
            )
    })

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