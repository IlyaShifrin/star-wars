import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {Route, Routes} from "react-router-dom";
import {navItems} from "../utils/constants.ts";

const Main = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`/${navItems[0]}`} element={<Home/>}/>
            <Route path={`/${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}`} element={<Contact/>}/>
        </Routes>
    )
    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>;
    //     case navItems[2]:
    //         return <StarWars/>;
    //     case navItems[3]:
    //         return <Contact/>;
    //     default:
    //         return <Home/>;
    // }
}

export default Main;