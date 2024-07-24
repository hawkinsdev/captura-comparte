import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseUserStore } from "../../store/UserStore";
import { HomeTemplate } from "../../components/templates/home";

const PrivateRoute: React.FC = () => {
  const UserInfo = UseUserStore((state) => state.user_info);

  return UserInfo?.accessToken ? (
    <HomeTemplate user_info={UserInfo}>
      <Outlet />
    </HomeTemplate>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
