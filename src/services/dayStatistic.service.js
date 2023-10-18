// import httpService from "./http.service";
import API from "../mockData";

// const endpoint = "dayStatistic/";

const DayStatisticService = {
    get: async () => {
        const {data} = await API.dayStatistic.fetchAll();
        // console.log(data)
        return {content:data};
    },
    // create: async (payload) => {
    //     const { data } = await httpService.post(endpoint, payload);
    //     return data;
    // },
    // getProduct: async (payload) => {
    //     const {data} = await httpService.get(endpoint+payload);
    //     return data;
    // },

}

export default DayStatisticService;
