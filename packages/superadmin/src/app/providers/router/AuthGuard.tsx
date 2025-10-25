import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../../store";

const AuthGuard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.setToken.token);
  
  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default memo(AuthGuard);
