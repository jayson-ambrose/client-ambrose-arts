import React from "react";

export default function Piece ({ piece }) {

    return (
        <div>
            <div key={piece.id}>
                <img className={'block h-96 w-auto'} src={piece.img_url}/>
                <h2 className={`text-2xl px-8 pt-2 font-advent`}>{piece.title}</h2>
            </div>
        </div>
    )
}