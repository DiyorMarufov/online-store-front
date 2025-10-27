import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
const AuthGuard = lazy(() => import("../providers/router/AuthGuard"));
const LoginPage = lazy(() => import("../../pages/login/LoginPage"));
const DashboardPage = lazy(() => import("../../pages/dashboard/DashboardPage"));
const WalletPage = lazy(() => import("../../pages/wallet/WalletPage"));
const MerchantsPage = lazy(() => import("../../pages/users/UsersPage"));
const SettingsPage = lazy(() => import("../../pages/settings/SettingsPage"));

export const Router = memo(() => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <AuthGuard />,
      children: [
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },
            {
              path: "users",
              element: <MerchantsPage />,
            },
            {
              path: "wallet",
              element: <WalletPage />,
            },
            {
              path: "settings",
              element: <SettingsPage />,
            },
          ],
        },
      ],
    },
  ]);
  return routes;
});
