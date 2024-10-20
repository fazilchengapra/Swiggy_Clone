import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ExploreRestaurants from "./pages/ExploreRestaurants";
import NavBar from "./components/NavBar";
import RestaurantMenu from "./pages/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Cart from "./pages/Cart";

// Parent layout component to wrap common elements (like NavBar)
const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <NavBar />
        <Outlet />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Parent component (layout with NavBar)
    children: [
      {
        path: "/", // Child route, will be rendered inside <Outlet />
        element: <Home />,
      },
      {
        path: "collections/:id/:tags", // Dynamic child route with parameters
        element: <ExploreRestaurants />,
      },
      {
        path: "/resto/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
