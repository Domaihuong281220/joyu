/** @format */

import { path } from "./Constant";
import {
  LoginPage,
  ManageUser,
  UserAdd,
  UserEdit,
  EditJob,
  CreateJob,
  ManageJobs,
  ManageEvents,
  EditEvent,
  CreateEvent,
  MetaTag,
  ProductAdd,
  ProductEdit,
  ProductManage,
  CategoriesAdd,
  CategoriesEdit,
  CategoriesManage,
  ProductView,
  ProductDetail,
  HomePageBanner,
  EditHomePageBanner,
  CreateLocation,
  EditLocation,
  LocationManage,
  ManageCustomer,
  CustomerAdd,
  AddressAdd,
  AddressEdit,
  AddressManage,
} from "../Pages";
const routes = [
  {
    path: path.LOGIN,
    exact: true,
    component: <LoginPage />,
    main: () => <LoginPage />,
    // role: ["user"],
  },

  // user
  {
    path: path.USERMANAGE,
    exact: true,
    component: <ManageUser />,
    main: () => <ManageUser />,
  },
  {
    path: path.CREATEUSER,
    exact: true,
    component: <UserAdd />,
    main: () => <UserAdd />,
  },
  {
    path: path.EDITUSER,
    exact: true,
    component: <UserEdit />,
    main: () => <UserEdit />,
  },

  // Jobs
  {
    path: path.JOBMANAGE,
    exact: true,
    component: <ManageJobs />,
    main: () => <ManageJobs />,
  },
  {
    path: path.CREATEJOB,
    exact: true,
    component: <CreateJob />,
    main: () => <CreateJob />,
  },
  {
    path: `${path.EDITJOB}/:id`,
    exact: true,
    component: <EditJob />,
    main: () => <EditJob />,
  },

  // Events

  {
    path: path.EVENTMANAGE,
    exact: true,
    component: <ManageEvents />,
    main: () => <ManageEvents />,
  },
  {
    path: path.CREATEVENT,
    exact: true,
    component: <CreateEvent />,
    main: () => <CreateEvent />,
  },
  {
    path: `${path.EDITEVENT}/:id`,
    exact: true,
    component: <EditEvent />,
    main: () => <EditEvent />,
  },
  // Meta tag
  {
    path: path.METATAG,
    exact: true,
    component: <MetaTag />,
    main: () => <MetaTag />,
  },

  // Product

  {
    path: path.PRODUCTMANAGE,
    exact: true,
    component: <ProductManage />,
    main: () => <ProductManage />,
  },
  {
    path: path.PRODUCTADD,
    exact: true,
    component: <ProductAdd />,
    main: () => <ProductAdd />,
  },
  {
    path: `${path.PRODUCTEDIT}/:id`,
    exact: true,
    component: <ProductEdit />,
    main: () => <ProductEdit />,
  },
  {
    path: `${path.PRODUCTVIEW}/:id`,
    exact: true,
    component: <ProductView />,
    main: () => <ProductView />,
  },

  // Category
  {
    path: path.CATEGORYMANAGE,
    exact: true,
    component: <CategoriesManage />,
    main: () => <CategoriesManage />,
  },
  {
    path: path.CATEGORYADD,
    exact: true,
    component: <CategoriesAdd />,
    main: () => <CategoriesAdd />,
  },
  {
    path: `${path.CATEGORYEDIT}/:id`,
    exact: true,
    component: <CategoriesEdit />,
    main: () => <CategoriesEdit />,
  },
  {
    path: path.HOMEPAGEBANNER,
    exact: true,
    component: <HomePageBanner />,
    main: () => <HomePageBanner />,
  },

  {
    path: `${path.HOMEPAGEBANNEREDIT}/:id`,
    exact: true,
    component: <EditHomePageBanner />,
    main: () => <EditHomePageBanner />,
  },

  // Locations

  {
    path: path.LOCATIONMANAGE,
    exact: true,
    component: <LocationManage />,
    main: () => <LocationManage />,
    role: ["admin"],
  },
  {
    path: path.CREATELOCATION,
    exact: true,
    component: <CreateLocation />,
    main: () => <CreateLocation />,
    role: ["admin"],
  },
  {
    path: path.EDITLOCATION,
    exact: true,
    component: <EditLocation />,
    main: () => <EditLocation />,
    role: ["admin"],
  },

  // customer
  {
    path: path.CUSTOMERMANAGE,
    exact: true,
    component: <ManageCustomer />,
    main: () => <ManageCustomer />,
  },
  {
    path: path.CREATECUSTOMER,
    exact: true,
    component: <CustomerAdd />,
    main: () => <CustomerAdd />,
  },

  // Address

  {
    path: path.MANAGEADDRESS,
    exact: true,
    component: <AddressManage />,
    main: () => <AddressManage />,
  },
  {
    path: path.ADDRESSADD,
    exact: true,
    component: <AddressAdd />,
    main: () => <AddressAdd />,
  },
  {
    path: `${path.ADDRESSEDIT}/:id`,
    exact: true,
    component: <AddressEdit />,
    main: () => <AddressEdit />,
  },
];

export default routes;
