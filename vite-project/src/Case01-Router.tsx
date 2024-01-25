import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TestAPI from "./API/01Test";
import RegistrationForm from "./Case01"

const router = createBrowserRouter([
  {
    path: "/",
    // element: <RegistrationForm />,

    children: [
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: "/posts",
        element: <TestAPI />,
      },
    ],
  },
]);

function TestRouter() {
  return (
    		<RouterProvider router={router} />
  );
}

export default TestRouter;
