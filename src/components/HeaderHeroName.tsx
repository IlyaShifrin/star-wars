import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const HeaderHeroName = () => {
    const {heroName} = useContext(SWContext);

    return (
        <h1 className="text-center py-6 text-3xl">{characters[heroName].name}</h1>
    );
};

export default HeaderHeroName;