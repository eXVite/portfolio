import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { routes } from "../constants/Routes";
import Portfolio from "../pages/portfolio/Portfolio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.base} element={<App />}>
      <Route path={routes.base} element={<Portfolio />} />
      <Route path={routes.showcase} element={<Portfolio />} />
    </Route>
  )
);

export default router;
