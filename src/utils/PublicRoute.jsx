/** @format */

import {
  HomePage,
  
} from "../Pages";

import { path } from "./Constant";

const routes = [
  {
    path: path.HOME,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  
];

export default routes;
