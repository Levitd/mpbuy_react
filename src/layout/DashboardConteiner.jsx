import React from "react";
import DashBoard from "./dashboard";

const DashboardConteiner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <DashBoard title={"Cтатистика за день"} addStyle="md:row-span-2">
                <div>Купили:<span className="text-zinc-800">84</span></div>
            </DashBoard>
            <DashBoard title={"Заказы"} />
            <DashBoard title={"Выкупы"} addStyle="md:order-1" />
            <DashBoard title={"Финансы"}/>
            <DashBoard title={"Отзывы"} addStyle="md:order-last"/>
        </div>
    );
};

export default  DashboardConteiner;
