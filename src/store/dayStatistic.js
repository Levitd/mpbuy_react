import { createSlice } from "@reduxjs/toolkit";
import DayStatisticService from "../services/dayStatistic.service";

const initialState = {
        entities: null,
        isLoading: false,
        error: null,
        dataLoaded: false
    };

const dayStatisticSlice = createSlice({
    name: "dayStatistic",
    initialState,
    reducers: {
        dayStatRequested: (state) => {
            state.isLoading = true;
            state.dataLoaded = false;
        },
        dayStatReceved: (state, action) => {
            state.entities=action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        dayStatRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

const { reducer: dayStatisticReducer, actions } = dayStatisticSlice;
const { dayStatRequested, dayStatReceved,dayStatRequestFiled } = actions;

export const dayStatGet =(data) => async (dispatch)=>{
        dispatch(dayStatRequested());
        try {
            const  {content}  = await DayStatisticService.get(data);
            dispatch(dayStatReceved(content))
        } catch (error) {
            dispatch(dayStatRequestFiled(error.message));
        }
};


export const getDayStatIsLoading = () => (state) => state.dayStatistic.isLoading;
export const getDayStat = () => (state) => state.dayStatistic.entities;
export const getDayStatDataLoaded = () => (state) => state.dayStatistic.dataLoaded;
export const getDayStatError = () => (state) => state.dayStatistic.error;

export default dayStatisticReducer;