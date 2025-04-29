import { atom } from "jotai";

export const searchAtom = atom<string>("");
export const minPriceAtom = atom<number>(0);
export const maxPriceAtom = atom<number>(Infinity);
export const categoryAtom = atom<string>("");
