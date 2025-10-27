import { Select } from "antd";
import { memo } from "react";
import OverviewDailyVisitChart from "../../../entities/overview/ui/DailyVisitChart";

const OverviewDailyStats = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-medium text-[19px] ">Daily Visit</h1>
          <p className="font-medium text-[16px] text-[#6E6E6E] pt-1">
            Users order on days Comparism
          </p>
        </div>
        <div>
          <Select placeholder="Day" className="w-[150px] h-10!" />
        </div>
      </div>

      <div className="pt-3">
        <OverviewDailyVisitChart />
      </div>
    </div>
  );
};

export default memo(OverviewDailyStats);
