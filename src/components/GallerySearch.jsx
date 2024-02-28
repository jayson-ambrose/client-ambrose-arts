import React from "react";
import Searchbar from "./Searchbar";

export default function GallerySearch ({handleSetSearchValue, searchValue}) {

    return (
        <Searchbar 
            placeholder='Filter gallery...' 
            name='search'
            controlCallback={handleSetSearchValue}
            controlValue={searchValue}/>
    )
}