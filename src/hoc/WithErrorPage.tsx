import {PropsWithChildren, useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

const WithErrorPage = (WrappedComponent: React.JSX.ElementType) => (props: PropsWithChildren) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return characters[heroId] ? (
        <WrappedComponent {...props} />
    )
        : <ErrorPage/>
}

export default WithErrorPage;
