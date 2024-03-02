import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import ThemedButton from "./ThemedButton";

export default function GalleryModal ({ galleryModal, setGalleryModal, piece }) {

    const {id, artist, title, price, category, img_url, status} = piece

    return (
    <Transition appear show={galleryModal}>
      <Dialog
          open={galleryModal}
          onClose={() => setGalleryModal(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >          
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />  
            <div className="fixed inset-0 flex justify-center items-center align-center">
              <Dialog.Panel className="w-2/3 rounded bg-offwhite justify-center pb-5">
                <h1 className='text-center bg-dark text-offwhite font-semibold font-forum text-3xl rounded-t'>
                  {title}
                </h1>
                <div className='flex flex-col w-full items-center'>
                  <div>
                    {/* description?  */}
                    <img className='w-fit' src={img_url}/>
                  </div>
                    <h1 className='font-advent text-xl '>By: {artist}</h1>
                    <ThemedButton text='Contact Artist'/>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
}