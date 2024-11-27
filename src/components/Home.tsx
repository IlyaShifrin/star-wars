import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import WithErrorPage from "../hoc/WithErrorPage.tsx";

const Home = () => {
    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    )
};

export default WithErrorPage(Home);