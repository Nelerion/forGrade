import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./mainComponent";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles.css";
import Meta from "./meta";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
  {
    path: "about",
    element: <MainComponent />,
  },
  {
    path: "contacts",
    element: <MainComponent />,
  },
  {
    path: "news",
    element: <MainComponent />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
