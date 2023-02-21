import { useRoutes } from "react-router";
import {
  Header,
  Homescreen,
  Signup,
  SignIn,
  ForgetPass,
  ResetPass,
  AfterRegister,
  CongrateComponent,
} from "./Bundled";

const HomeRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Homescreen />
        </>
      ),
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/forget",
      element: <ForgetPass />,
    },
    {
      path: "/reset",
      element: <ResetPass />,
    },
    {
      path: "/after-register",
      element: <AfterRegister />,
    },
    {
      path: "/congrate-screen",
      element: <CongrateComponent />,
    },
  ]);
  return element;
};

export default HomeRoutes;
