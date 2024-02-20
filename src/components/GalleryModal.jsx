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
          <Dialog.Panel className="w-2/3 h-2/3 rounded-xl bg-offwhite justify-center shadow-2xl">
            <Dialog.Title>{title}</Dialog.Title>
            <div>
                <img src={img_url}/>
                <h1>By: {artist}</h1>
                <ThemedButton text='Contact Artist'/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    )
}

//current bugs... trying to surround modal in a blurred background which, when clicked will close the modal and nothing else.
//modal may need to be implemented differently. Use headless ui dialog(modal)