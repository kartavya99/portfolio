import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faServer,
  faToolbox,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLaptopCode, faServer, faToolbox, faLightbulb);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
