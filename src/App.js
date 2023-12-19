import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
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
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
