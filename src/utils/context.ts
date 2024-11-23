import {createContext} from "react";
import {SWContextValue} from "./types.d.tsx";

export const SWContext = createContext<SWContextValue>({
    heroName: '',
    changeHeroName: (name: string) => console.log(name)
})