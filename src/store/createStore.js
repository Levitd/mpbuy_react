
import dayStatisticReducer from "./dayStatistic";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    dayStatistic: dayStatisticReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
