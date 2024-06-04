import React, { useState, useEffect } from "react";
import { urlPrefix } from "/public/helpers.js";
import GalleryManagerTableEntry from "./GalleryManagerTableEntry";
import GalleryManagerModal from "./GalleryManagerModal";
import ThemedButton from "../ui/ThemedButton";

export default function GalleryManagerTable () {
    
    const [ pieces, setPieces ] = useState([])

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

    const displayPieces = pieces.map((piece) => <GalleryManagerTableEntry key={piece.id} piece={piece}/>)

    return (
        <>
            <table className='table-auto border border-slate-600'>
                <thead className=" border border-slate-600">
                    <tr className="">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image URL</th>
                        <th>Sold</th>
                        <th>Added</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {displayPieces}
                </tbody>
            </table>
            <ThemedButton text='Add Piece'/>
        </>
    )
}