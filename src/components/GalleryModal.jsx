import React, { useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";

export default function GalleryModal ({ galleryModal, setGalleryModal }) {

    return (
        <Dialog as='div' open={galleryModal} onClose={() => setGalleryModal(false)}>
            <Dialog.Panel>
                <Dialog.Title>Test</Dialog.Title>
            </Dialog.Panel>
        </Dialog>
    )
}

//current bugs... trying to surround modal in a blurred background which, when clicked will close the modal and nothing else.
//modal may need to be implemented differently. Use headless ui dialog(modal)