import { memo } from "react";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/header";

export const DashboardLayout = memo(() => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden main">
        <Header />
        <main className="flex-1 overflow-auto min-[770px]:p-4 main">
          <Outlet />
        </main>
      </div>
    </div>
  );
});
