import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {SWContext} from './utils/context.js';
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContextValue} from "./utils/types.d.tsx";

function App() {
    const [heroName, setHeroName] = useState<string>(defaultHero);

    const changeHeroName = (name: string) => {
        setHeroName(name);
    }

    return (
        <>
            <SWContext.Provider value={{
                heroName, changeHeroName
            } as SWContextValue}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext.Provider>
        </>
    )
}

export default App
