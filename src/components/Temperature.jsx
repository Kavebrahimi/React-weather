import { useSelector } from "react-redux";

export const Temperature = () => {

    const {data, isLoading, error} = useSelector(state => state.weather)

    return (
        <>
            {
                isLoading ? (
                    <div className={'grid place-items-center'}>
                        <span className={'loader'}></span>
                    </div>
                ) : data.main ? (
                    <div className={'flex flex-col items-center'}>
                        <div className={'temperature-container'}>
                            <p className={'text-start city-name'}>{data.name}</p>
                            <span className={'temperature'}>{Math.round(data.main.temp)}°</span>
                            <div className={'grid grid-cols-2 font-semibold mt-10'}>
                                <p className={'inline-flex items-center justify-center gap-1'}>
                                    <span>Feels Like: {data.main.feels_like}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>
                                </p>
                                <p className={'inline-flex items-center justify-center gap-1'}>
                                    <span>Humidity: {data.main.humidity}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM187.83,184H68.17a72,72,0,0,1-8-16H195.87A72,72,0,0,1,187.83,184ZM200,144a70.57,70.57,0,0,1-.46,8H56.46a70.57,70.57,0,0,1-.46-8q0-4,.36-8H199.64Q200,140,200,144ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26ZM82.81,200h90.38a71.82,71.82,0,0,1-90.38,0Z"></path></svg><
                                    /p>
                            </div>
                        </div>
                        <h2 className={'weather-status inline-block'}>{ data.weather[0].main }</h2>
                    </div>
                ) : error ? (
                    <h3 className={'default-text'}>Enter the City or Country name Correctly</h3>
                ) : (
                    <h3 className={'default-text'}>
                        <p>Looking Cozy? Check the Weather</p>
                        <span className={'text-xs bg-black/30 p-2 rounded-md'}>for a better result enter the exact city name</span>
                    </h3>
                )
            }
        </>
    )
}