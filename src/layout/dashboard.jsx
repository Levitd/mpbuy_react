import React from "react";
// import Page from "../components/page";
import Title from "../components/title";

const DashBoard = ({ title, addStyle="", children }) => {
    return (
        <div className={"rounded border-2" + " "+ addStyle}>
        <Title label={title} pageMargin=""/>
            {children}
        </div>
    );
}

export default DashBoard;
