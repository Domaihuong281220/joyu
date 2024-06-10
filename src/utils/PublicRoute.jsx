/** @format */

import {
  Catering,
  Event,
  EventDetail,
  Franchising,
  HomePage,
  OurStory,
  Location,
  Careers,
  ProductDetail,
  Menu,
} from "../Pages";

import { path } from "./Constant";

const routes = [
  {
    path: path.HOME,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  {
    path: path.CATERING,
    exact: true,
    component: <Catering />,
    main: () => <Catering />,
  },
  {
    path: path.EVENT,
    exact: true,
    component: <Event />,
    main: () => <Event />,
  },
  {
    path: `${path.EVENTDATAIL}/:code`,
    exact: true,
    component: <EventDetail />,
    main: () => <EventDetail />,
  },
  {
    path: path.FRANCHISING,
    exact: true,
    component: <Franchising />,
    main: () => <Franchising />,
  },
  {
    path: path.LOCATION,
    exact: true,
    component: <Location />,
    main: () => <Location />,
  },
  {
    path: path.OURSTORY,
    exact: true,
    component: <OurStory />,
    main: () => <OurStory />,
  },
  {
    path: path.CAREERS,
    exact: true,
    component: <Careers />,
    main: () => <Careers />,
  },
  {
    path: path.MENU,
    exact: true,
    component: <Menu />,
    main: () => <Menu />,
  },
  {
    path: `${path.PRODUCTDETAIL}`,
    exact: true,
    component: <ProductDetail />,
    main: () => <ProductDetail />,
  },
];

export default routes;
