import React, { useState } from "react";
import ArtistModal from "./ArtistModal";

export default function ArtistCard ({ artist }) {
    
    const [artistModal, setArtistModal] = useState(false)

    function handleSetArtistModal () {
        setArtistModal(true)
    }

    return(
        <div onClick={() => handleSetArtistModal() }className='p-5'>
            <h1>{artist.name}</h1>
            <img className='h-96' src={artist.img_url} alt={`Picture of the artist ${artist.name}.`}/>
            {artistModal ? <ArtistModal 
                artist={artist} 
                artistModal={artistModal} 
                setArtistModal={setArtistModal}/> : null}
        </div>
    )
}