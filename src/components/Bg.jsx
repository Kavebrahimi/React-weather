import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

export const Bg = ({ children }) => {
    const { data } = useSelector((state) => state.weather);
    const [bgChange, setBgChange] = useState("default");
    const [nextBg, setNextBg] = useState("default");
    const bgRef = useRef(null);

    useEffect(() => {
        if (!data.main || !data.weather) return;

        const weatherStatus = data.weather[0].main;

        let newBg = "default";
        if (weatherStatus === "Rain") newBg = "drizzle";
        else if (weatherStatus === "Clear") newBg = "clean";
        else if (weatherStatus === "Clouds") newBg = "cloudy";
        else if (weatherStatus === "Snow") newBg = "freezing";
        else if (weatherStatus === "Squall") newBg = "windy";
        else if (weatherStatus === "Tornado") newBg = "tornado";
        else if (weatherStatus === "Drizzle") newBg = "rainy"

        if (newBg !== bgChange) {
            setNextBg(newBg);
            gsap.to(bgRef.current, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    setBgChange(newBg);
                    gsap.to(bgRef.current, { opacity: 1, duration: 0.8 });
                },
            });
        }
    }, [data]);

    return (
        <div className="main-container relative w-full h-full overflow-hidden">
            <div
                ref={bgRef}
                className={`absolute top-0 left-0 w-full h-full bg-${bgChange} bg-cover bg-center`}
                style={{ opacity: 1 }}
            ></div>
            <div className="relative z-10 flex flex-col">{children}</div>
        </div>
    );
};
