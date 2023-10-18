const dayStatistic = {
    data: {
        order: {
            today: "25",
            yesterday: "21"
        },
        sales: {
            today: "28",
            yesterday: "31"
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
