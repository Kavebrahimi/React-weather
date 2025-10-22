import { useDateTime } from "../context/DateTimeContext.jsx";

export const NowTime = () => {

    const {nowTime} = useDateTime()

    return (
        <div className={'text-white flex-1/6 flex items-end justify-end flex-col'}>
            <h1 className="font-semibold">{nowTime}</h1>
            <small>
                <a href="https://github.com/Kavebrahimi">By Kave Ebrahimi</a>
            </small>
        </div>
    )
}