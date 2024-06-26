import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import ThemedButton from "../ui/ThemedButton"
import { useSetRecoilState } from "recoil";  
import { activeUserAtom, loggedInAtom } from "../../lib/atoms";
import { urlPrefix } from "/public/helpers.js";

export default function AdminLogoutModal ({logoutModal, setLogoutModal}) {

    const setActiveUser = useSetRecoilState(activeUserAtom)
    const setLoggedIn = useSetRecoilState(loggedInAtom)

    const handleLogout = async () => {
        fetch(`${urlPrefix}/logout`, {
          method: 'DELETE',
          credentials: 'include'
        }).then(()=> {
          setActiveUser(null)
          setLoggedIn(false)
          setLogoutModal(false)
        })
    }

    return (
        <Transition appear show={logoutModal}>
          <Dialog
            open={logoutModal}
            onClose={() => setLogoutModal(false)}>
  
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
                  <h1>Are you sure you want to logout? Any unsubmitted changes will be lost.</h1>
                  <ThemedButton text={'Logout'} callback={handleLogout}/>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      )
}