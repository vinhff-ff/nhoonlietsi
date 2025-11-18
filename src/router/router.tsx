import React, { lazy } from "react";
import Path from "./path";
import { IRoute } from "./interface";

const DefaultLayout = lazy(() => import("../components/LayoutMain/layout-main"));
const SearchLayout = lazy(() => import("../components/Search/layout-search"));
const Home = lazy(() => import("../pages/home/home"));
const ThongTinCuocChien = lazy(() => import("../pages/ThongTinCuocChien/index"));
const ThongTinChienSi = lazy(() => import("../pages/ThonTinChienSi/index"));
const routes: IRoute[] = [
  {
    name: "Home",
    key: "home",
    path: Path.Home,
    layout: DefaultLayout,
    component: Home,
    isPrivateRoute: false,
    routeChild: [],
  },
  {
    name: "ThongTinCuocChien",
    key: "ThongTinCuocChien",
    path: Path.ThongTinCuocChien,
    layout: DefaultLayout,
    component: ThongTinCuocChien,
    isPrivateRoute: false,
    routeChild: [],
  },
  {
    name: "ThongTinChienSi",
    key: "ThongTinChienSi",
    path: Path.ThongTinChienSi,
    layout: SearchLayout,
    component: ThongTinChienSi,
    isPrivateRoute: false,
    routeChild: [],
  },
];

export default routes;
