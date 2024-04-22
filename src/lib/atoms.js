import { atom } from "recoil";

export const modalActiveAtom = atom({
    key: 'modalActiveKey',
    default: null
})

export const loggedInAtom = atom({
    key: 'loggedInKey',
    default: false
})

export const activeUserAtom = atom({
    key: 'activeUserKey',
    default: null
})