import Home from "../views/Home";

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
];

export default routes;
