import { memo } from "react";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/header";

export const DashboardLayout = memo(() => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
});
