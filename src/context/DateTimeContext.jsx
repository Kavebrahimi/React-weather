import { createContext,useContext,useEffect,useState } from "react";
import moment from "jalali-moment";

const DateTimeContext = createContext();

export const DateTimeProvider = ({children})=>{

    const [ now,setNow ] = useState(moment());

    useEffect(() => {
        const interval = setInterval(()=>{
            setNow(moment())
        }, 60000);
        return ()=> clearInterval(interval)
    },[]);

    const value = {
        gregorianDate: now.locale('en').format('dddd DD MMMM'),
        solarDate: now.locale('fa').format('dddd DD MMMM'),
        nowTime : now.locale('en').format('HH:mm')
    };

    return (
        <DateTimeContext.Provider value={value}>
            {children}
        </DateTimeContext.Provider>
    )
}

export const useDateTime = ()=> useContext(DateTimeContext);
