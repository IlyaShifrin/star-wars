import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);

    return (
        <>
            <SWContext.Provider value={{
                hero, changeHero: setHero
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext.Provider>

        </>
    )
}

export default App
