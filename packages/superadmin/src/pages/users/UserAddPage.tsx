import { memo } from "react";
import UsersCreateForm from "../../entities/users/ui/UserCreateForm";

const UserAddPage = () => {
  return (
    <div className="px-5 pt-1">
      <h1 className="text-[#0D0F11] text-[24px] font-bold max-[770px]:pt-2">
        Add User
      </h1>

      <div className="min-h-[750px] bg-[#F8F8F8] mt-[29px]">
        <UsersCreateForm />
      </div>
    </div>
  );
};

export default memo(UserAddPage);
