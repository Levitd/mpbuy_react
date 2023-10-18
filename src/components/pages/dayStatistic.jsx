import React, {useEffect, useState} from "react";
import {dayStatGet, getDayStat, getDayStatDataLoaded, getDayStatIsLoading} from "../../store/dayStatistic";
import {useDispatch, useSelector} from "react-redux";
import SpinnerLader from "../SpinnerLoader";

const DayStatistic = ({ addStyle = "", border = "", widthScreen = "" }) => {
    const dispatch = useDispatch();
    const dayStatisticLoading = useSelector(getDayStatIsLoading());
    const [statLoad,setStatLoad] = useState(dayStatisticLoading);
    const dayStatData=useSelector(getDayStat());

    useEffect(() => {
        if (!dayStatisticLoading) {
            dispatch(dayStatGet());
        }
        setStatLoad(dayStatisticLoading)
    }, [statLoad, dispatch]);

    return (
        <>
        {!dayStatData && <SpinnerLader />}
            {dayStatData &&
        <div className={"mx-auto bg-state-300 p-2" +" " + border + " " + addStyle}>
            <div className={widthScreen}>
                <div className="flex flex-col gap-2 divide-y divide-blue-200">
                    <div className="flex flex-row ">
                        <div className="basis-2/4"></div>
                        <div className="basis-1/4">Заказали</div>
                        <div className="basis-1/4">Выкупили:</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <div className="basis-2/4">Сегодня</div>
                            <div className="basis-1/4">
                                <span className="text-zinc-800">{dayStatData.order.today}</span>
                            </div>
                            <div className="basis-1/4"><span className="text-zinc-800">{dayStatData.sales.today}</span></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="basis-2/4">Вчера</div>
                        <div className="basis-1/4">
                            <span className="text-zinc-800">{dayStatData.order.yesterday}</span>
                            <span className={`text-${dayStatData.order.today-dayStatData.order.yesterday>0 ? "green": "red"}-500`}> ({dayStatData.order.today-dayStatData.order.yesterday})</span>
                        </div>
                        <div className="basis-1/4">
                            <span className="text-zinc-800">{dayStatData.sales.yesterday}</span>
                            <span className={`text-${dayStatData.sales.today-dayStatData.sales.yesterday>0 ? "green": "red"}-500`}> ({dayStatData.sales.today-dayStatData.sales.yesterday})</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="basis-2/4">Прошлая неделя</div>
                        <div className="basis-1/4">
                            <span className="text-zinc-800">{dayStatData.order.previousWeek}</span>
                            <span className={`text-${dayStatData.sales.today-dayStatData.order.previousWeek>0 ? "green": "red"}-500`}> ({dayStatData.order.today-dayStatData.order.previousWeek})</span>
                        </div>
                        <div className="basis-1/4">
                            <span className="text-zinc-800">{dayStatData.sales.previousWeek}</span>
                            <span className={`text-${dayStatData.sales.today-dayStatData.sales.previousWeek>0 ? "green": "red"}-500`}> ({dayStatData.sales.today-dayStatData.sales.previousWeek})</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
            }
        </>
    )
};

export default DayStatistic;
