/** @format */

import { Routes, Route } from "react-router-dom";
// import { Footer, Header } from "../components";

import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import PublicRoute from "../utils/PublicRoute";
import PrivateRoute from "../utils/PrivateRoute";
import { Sidebar } from "../components";

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
  // const showPrivateMenu = (routes) => {
  //   var result = null;
  //   if (routes.length > 0) {
  //     result = routes.map((route, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           path={route.path}
  //           element={
  //             <ProtectedRoute
  //               isAllowed={
  //                 user
  //                   ? route.role
  //                     ? route.role.includes(user.role)
  //                     : false
  //                   : false
  //               }
  //               redirectPath={`../${path.NOTAUTH}`}
  //             >
  //               {route.main()}
  //             </ProtectedRoute>
  //           }
  //           exact={route.exact}
  //         ></Route>
  //       );
  //     });
  //   }
  //   return result;
  // };

  return (
    <>
      {/* <Header /> */}
      {/* <Routes>{showContentMenu(routes)}</Routes>
      <Footer /> */}

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
