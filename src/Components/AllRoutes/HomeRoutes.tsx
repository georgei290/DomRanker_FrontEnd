import { useRoutes } from "react-router";
import {
  Header,
  Homescreen,
  Signup,
  SignIn,
  ForgetPass,
  ResetPass,
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
  ]);
  return element;
};

export default HomeRoutes;
