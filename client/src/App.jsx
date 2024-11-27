import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import productsLoader from "./loaders/units/productsLoader";
import store from "./redux/app/store";
import { Provider } from "react-redux";
import authLoader from "./loaders/units/authLoader";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Logout from "./components/Logout";
import AdminDashboardWrapper from "./wrappers/AdminDashboardWrapper";
import Dashboard from "./pages/user/Dashboard";
import Cart from "./pages/user/Cart";
import Orders from "./pages/user/Orders";
import UserProducts from "./pages/user/UserProducts";

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "products/pages/:page",
            element: <Products />,
            loader: productsLoader,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          {
            path: "register",
            element: <Register />,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          {
            path: "login",
            element: <Login />,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          {
            path: "logout",
            element: <Logout />,
            hydrateFallbackElement: <div>Loading...</div>,
          }
        ]
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "",
        element: <Dashboard />,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "products/pages/:page",
        element: <UserProducts />,
        loader: productsLoader,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "cart",
        element: <Cart />,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "orders",
        element: <Orders />,
        hydrateFallbackElement: <div>Loading...</div>,
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  )
}

export default App;