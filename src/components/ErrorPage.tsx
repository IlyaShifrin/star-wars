import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {wrongHero} from "../utils/constants.ts";

const ErrorPage = () => {
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        changeHero(wrongHero);
    }, []);

    return (
        <div className={'text-3xl text-center tracking-widest leading-lose'}>
            O-o-ops, something went wrong!
        </div>
    );
};

export default ErrorPage;