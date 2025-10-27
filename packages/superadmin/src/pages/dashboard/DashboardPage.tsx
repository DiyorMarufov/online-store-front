import { memo } from "react";
import OverviewStatCards from "../../widgets/overview/ui/OverviewStatCards";
import OverviewDailyStats from "../../widgets/overview/ui/OverviewDailyStats";
import OverviewUsersStats from "../../widgets/overview/ui/OverviewUsersStats";
import OverviewRecentOrders from "../../widgets/overview/ui/OverviewRecentOrders";


const DashboardPage = () => {
  return (
    <div className="max-[770px]:bg-[#F8F8F8] max-[770px]:px-5 min-[770px]:px-5 pt-1">
      <h1 className="text-[#0D0F11] text-[24px] font-bold max-[770px]:pt-2">Overview</h1>
      <div className="rounded-lg min-[770px]:bg-[#F8F8F8] mt-[29px] min-[770px]:px-[47px] min-[770px]:py-[41px] flex flex-col gap-[43px]">
        <div>
          <OverviewStatCards />
        </div>
        <div className="flex gap-5 max-[1430px]:flex-col">
          <div className="w-[65%] bg-[#ffffff] py-[26px] px-[37px] max-[1430px]:w-full">
            <OverviewDailyStats />
          </div>
          <div className="w-[35%] bg-[#ffffff] max-[1430px]:w-full max-[1430px]:pb-5">
            <OverviewUsersStats />
          </div>
        </div>
        <div>
          <OverviewRecentOrders/>
        </div>
      </div>
    </div>
  );
};

export default memo(DashboardPage);
