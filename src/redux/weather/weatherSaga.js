import { receiveError,receiveResponse,sendRequest } from "./weatherSlice.js";
import axios  from "axios";
import  {takeLatest, put, call, delay} from 'redux-saga/effects'

export const getWeatherInfo = (query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1675f39f800e2dacdf58c9a6a244345e&units=metric`)
}

function* handleWeatherInfo(action) {
    try {
        yield delay(1000)
        const res = yield call(getWeatherInfo, action.payload)
        yield put(receiveResponse(res.data))
    } catch (error) {
        yield put(receiveError(error.message))
    }
}

export function* weatherSaga() {
    yield takeLatest(sendRequest.type, handleWeatherInfo)
}