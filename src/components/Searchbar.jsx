import { NowTime } from "./NowTime.jsx";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "../redux/weather/weatherSlice.js";
import { useState, useEffect, useRef } from "react";

export const Searchbar = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.weather);
    const [query, setQuery] = useState("");
    const debounceTimer = useRef(null);

    useEffect(() => {
        if (!query.trim()) return;

        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            dispatch(sendRequest(query));
        }, 1000);
        return () => clearTimeout(debounceTimer.current);
    }, [query, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) dispatch(sendRequest(query));
        setQuery("");
    };

    return (
        <div className="flex items-center justify-between gap-10">
            <form className="search-container z-50" onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    placeholder={data.name || "Enter City or Country name"}
                    className="search-input peer"
                    type="text"
                />
                <button type="submit" className="search-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                </button>
            </form>
            <NowTime />
        </div>
    );
};
