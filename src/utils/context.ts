import {createContext} from "react";
import {SWContextValue} from "./types.d.tsx";

export const SWContext = createContext<SWContextValue>({
    page: 'Home',
    changePage: (page: string) => console.log(page)
})