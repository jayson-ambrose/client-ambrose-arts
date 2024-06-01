import React, { useState, useEffect } from "react";

export default function GalleryManagerTable () {
    
    const [ pieces, setPieces ] = useState([])

    useEffect(() => {
        fetchPieces()
    }, [])

    async function fetchPieces () {
        const resp = await fetch('/api/pieces')

        if (resp.ok) {
            setPieces(await resp.json())
        } else {
            console.log(resp.status + ': ' + resp.statusText)
        }        
    }

    console.log(pieces)

    return (
        <h1>hello world</h1>
    )
}