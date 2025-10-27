import { List, ShoppingCart, Store, Users } from "lucide-react";
import { memo } from "react";

const OverviewStatCards = () => {
  return (
    <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[750px]:grid-cols-1 gap-10">
      <div className="rounded-3xl bg-[#ffffff] pl-[30px] pt-5 pb-[9px]">
        <div className="w-fit p-3 border rounded-full border-green-200 bg-green-200">
          <ShoppingCart className="text-green-600" />
        </div>
        <div className="pt-[25px]">
          <span className="text-[16px] font-medium text-[#6E6E6E]">
            Total Sales
          </span>
        </div>
        <div className="pt-2">
          <span className="text-[32px] font-bold">500</span>
        </div>
      </div>
      <div className="rounded-3xl bg-[#ffffff] pl-[30px] pt-5 pb-[9px]">
        <div className="w-fit p-3 border rounded-full border-[#EAF1FE] bg-[#EAF1FE]">
          <Store className="text-blue-500" />
        </div>
        <div className="pt-[25px]">
          <span className="text-[16px] font-medium text-[#6E6E6E]">
            No of Store
          </span>
        </div>
        <div className="pt-2">
          <span className="text-[32px] font-bold">50</span>
        </div>
      </div>
      <div className="rounded-3xl bg-[#ffffff] pl-[30px] pt-5 pb-[9px]">
        <div className="w-fit p-3 border rounded-full border-[#FDF0DA] bg-[#FDF0DA]">
          <List className="text-orange-500" />
        </div>
        <div className="pt-[25px]">
          <span className="text-[16px] font-medium text-[#6E6E6E]">
            No of Markets
          </span>
        </div>
        <div className="pt-2">
          <span className="text-[32px] font-bold">11</span>
        </div>
      </div>
      <div className="rounded-3xl bg-[#ffffff] pl-[30px] pt-5 pb-[9px]">
        <div className="w-fit p-3 border rounded-full border-[#FEF3EB] bg-[#FEF3EB]">
          <Users className="text-red-500" />
        </div>
        <div className="pt-[25px]">
          <span className="text-[16px] font-medium text-[#6E6E6E]">
            No of Admins
          </span>
        </div>
        <div className="pt-2">
          <span className="text-[32px] font-bold">22</span>
        </div>
      </div>
    </div>
  );
};

export default memo(OverviewStatCards);
