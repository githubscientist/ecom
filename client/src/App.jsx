import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import productsLoader from "./loaders/units/productsLoader";
import store from "./redux/app/store";
import { Provider } from "react-redux";

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
            element: <Register />
          },
          {
            path: "login",
            element: <Login />
          }
        ]
      },
    ]
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