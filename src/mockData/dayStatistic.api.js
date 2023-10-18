const dayStatistic = {
    data: {
        order: {
            today: "25",
            yesterday: "21",
            previousWeek:"17"
        },
        sales: {
            today: "28",
            yesterday: "31",
            previousWeek:"24"
        }
    }
};
const fetchAll = () =>
new Promise((resolve) => {

window.setTimeout(function () {
resolve(dayStatistic);
}, 2000);
});

export default {
fetchAll
};
