import {useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.js";
import {HeroInfo} from "../utils/types.d.tsx";
import {useParams} from "react-router-dom";
import WithErrorPage from "../hoc/WithErrorPage.tsx";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    let {heroId = defaultHero} = useParams();

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [heroId])

    return (
            <>
                {(!!hero) &&
                    <div className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
                        {Object.keys(hero).map(key => <p key={key}><span
                            className={`text-[1.25em] capitalize`}>{key.replace('_', ' ')}:</span> {hero[key as keyof HeroInfo]}
                        </p>)}
                    </div>
                }
            </>
        )
}

export default WithErrorPage(AboutMe);