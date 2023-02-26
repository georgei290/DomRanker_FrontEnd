import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import HomeRoutes from "../Components/AllRoutes/HomeRoutes";
import Homescreen from "../Components/HomeScreen";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.currentUser);

  return (
    <div>
      {user ? (
        <div>{children}</div>
      ) : (
        <div>
          <Homescreen />{" "}
        </div>
      )}
    </div>
  );
};

export default PrivateRoute;
