import { memo } from "react";

const OverviewUsersStats = () => {
  return (
    <div className="py-5">
      <h1 className="font-bold text-[20px] pl-10">No of Users</h1>
      <div className="flex justify-center items-center pt-8">
        <div className="px-16 w-[280px] h-[280px] rounded-full border border-blue-500 outline-20 outline-blue-500 flex flex-col items-center justify-center">
          <span className="font-bold text-[45px]">1000</span>
          <p className="font-medium text-[16px] text-[#6E6E6E]">Total Users</p>
        </div>
      </div>
    </div>
  );
};

export default memo(OverviewUsersStats);
