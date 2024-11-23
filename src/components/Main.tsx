import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {Route, Routes} from "react-router-dom";
import {navItems} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            {['/', `/${navItems[0].path}`].map(path => <Route path={path} key={path} element={<Home/>}/>)}
            {[`/${navItems[1].path}`, `/${navItems[1].path}/:heroId`].map(path => <Route path={path} key={path} element={<AboutMe/>}/>)}
            <Route path={`/${navItems[2].path}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3].path}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
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