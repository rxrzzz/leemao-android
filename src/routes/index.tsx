import { Search } from "../features/search/components/Search";
import Landing from "../features/landing/Landing";
import { useRoutes } from "react-router-dom";

export const routes = [
  { path: "/", element: <Landing /> },
  { path: "/search", element: <Search /> }
];

export const AppRoutes = () => {
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
