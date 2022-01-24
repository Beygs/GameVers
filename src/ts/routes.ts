import { Routes } from "../interfaces";
import Home from "./Home";
import PageDetail from "./PageDetail";
import PageList from "./PageList";

const routes: Routes = {
  "": Home,
  pageList: PageList,
  pageDetail: PageDetail
};

export default routes;