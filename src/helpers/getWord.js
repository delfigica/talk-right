import { words } from "../data/data"

export const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}