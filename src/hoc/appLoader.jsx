import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {dayStatGet, getDayStatIsLoading} from "../store/dayStatistic";
// import {useLocation} from "react-router-dom";
import SpinnerLader from "../components/SpinnerLoader";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    // const location = useLocation();
    const dayStatisticLoading = useSelector(getDayStatIsLoading());
    // const [statLoad, setStatLoad] = useState(dayStatisticLoading);

    useEffect(() => {
        if (!dayStatisticLoading) {
            dispatch(dayStatGet());
        }
    }, []);
    return (
        <>
            {dayStatisticLoading && <SpinnerLader />}
            {!dayStatisticLoading &&
                children
            }
        </>
    );
};

export default AppLoader;
