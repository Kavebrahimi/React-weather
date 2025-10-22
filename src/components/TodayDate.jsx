import { useDateTime } from "../context/DateTimeContext.jsx";

export const TodayDate = () => {

    const {gregorianDate} = useDateTime();

    return (
        <div className="text-white mt-5 text-shadow-lg">
            <p className="mt-3">{gregorianDate}</p>
        </div>
    );
}
