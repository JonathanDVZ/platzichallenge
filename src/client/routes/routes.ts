import Home from "../views/Home";
import Favorites from "../views/Favorites";

export type Route = {
  path: string;
  component: React.FC;
  index?: boolean;
};

const routes: Route[] = [
  {
    path: "/",
    component: Home,
    index: true,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
];

export default routes;
