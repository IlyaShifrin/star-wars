import Navigation from "./Navigation.jsx";
import HeaderHeroName from "./HeaderHeroName.tsx";

const Header = () => {
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <HeaderHeroName/>
        </header>
    );
};

export default Header;