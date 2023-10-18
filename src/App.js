import withRedux from "./hoc/withRedux";
import withRouter from "./hoc/withRouter";
import AppLoader from "./hoc/appLoader";
import {Route, Routes} from "react-router-dom";
import MainPage from "./layout/mainPage";

function App() {
  return (
      <AppLoader>
          <Routes>
              <Route path="/" element={<MainPage/> } />
          </Routes>
      </AppLoader>
  );
}

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
