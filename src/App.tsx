import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import Body from "./components/Body";
import Authentication from "./components/Authentication/Authentication";
import Posts from "./components/Posts/Posts";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Authentication />,
      },
      {
        path: "/posts",
        element: <Posts />
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;