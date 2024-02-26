import React from "react";
import { Dialog } from "@headlessui/react";
import ThemedButton from "./ThemedButton";

export default function GalleryModal ({ galleryModal, setGalleryModal, piece }) {

    const {id, artist, title, price, category, img_url, status} = piece

    return (
    <Dialog
        open={galleryModal}
        onClose={() => setGalleryModal(false)}
      >
        <div className="fixed inset-0 flex justify-center items-center align-center">
          <Dialog.Panel className="w-2/3 rounded-xl bg-offwhite justify-center drop-shadow-3xl pb-5">
            <h1 className='text-center bg-darkbrown text-offwhite font-semibold font-forum text-3xl rounded-t-xl'>
              {title}
            </h1>
            <div className='flex flex-col w-full items-center'>
              <div>
                {/* description?  */}
                <img className='w-fit' src={img_url}/>
              </div>
                <h1>By: {artist}</h1>
                <ThemedButton text='Contact Artist'/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    )
}