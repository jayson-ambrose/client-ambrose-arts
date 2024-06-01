import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import ArtistCard from "./ArtistCard";
import { urlPrefix } from "../lib/helpers";

export default function Artists () {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        fetchArtists()
    }, [])

    async function fetchArtists () {
        const resp = await fetch(`${urlPrefix}/artists`)

        if (resp.ok) {
            setArtists(await resp.json())
        } else {
            console.log(resp.status + ': ' + resp.statusText)
        }        
    }

    const displayArtists = artists.map((artist) => <ArtistCard key={artist.id} artist={artist}/> )

    return (
        <div className="flex justify-center flex-col">
            <Heading name='Artists'/>
            <div className="flex justify-center">
                {displayArtists}
            </div>   
        </div>
    )
}