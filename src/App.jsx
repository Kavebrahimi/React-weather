import React from 'react';
import { Searchbar } from "./components/Searchbar.jsx";
import { TodayDate } from "./components/TodayDate.jsx";
import { Temperature } from "./components/Temperature.jsx";
import { Bg } from "./components/Bg.jsx";
import { DateTimeProvider } from "./context/DateTimeContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
    return (
        <Provider store={store}>
                <Bg>
                    <div className={'inner-container z-30'}>
                        <DateTimeProvider>
                            <Searchbar/>
                            <TodayDate/>
                        </DateTimeProvider>
                    </div>
                    <Temperature/>
                </Bg>
        </Provider>
    );
}

export default App;