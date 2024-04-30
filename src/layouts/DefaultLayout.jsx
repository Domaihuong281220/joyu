/** @format */

import { Routes, Route } from "react-router-dom";
// import { Footer, Header } from "../components";

import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import PublicRoute from "../utils/PublicRoute";
import PrivateRoute from "../utils/PrivateRoute";
import { Sidebar } from "../Component";

const DefaultLayout = (props) => {
  //Routes
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Routes>{showContentMenu(routes)}</Routes>
      <Footer /> */}
      <Sidebar />
      <Routes>
        <Route element={<PublicLayout />}>{showContentMenu(PublicRoute)}</Route>

        <Route element={<PrivateLayout />}>
          {showContentMenu(PrivateRoute)}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
