import { Button, Input, Select } from "antd";
import { memo } from "react";
import DataTable from "../../shared/ui/DataTable/DataTable";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Users = () => {
  const columns = [
    { key: "id", label: "#" },
    { key: "fullname", label: "Fullname" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "verification", label: "Verification" },
    { key: "status", label: "Status" },
  ];

  const data = [
    {
      id: "#1001",
      fullname: "John Doe",
      email: "john.doe@example.com",
      role: "customer",
      verification: "verified",
      status: "active",
    },
    {
      id: "#1002",
      fullname: "Jane Smith",
      email: "jane.smith@example.com",
      role: "seller",
      verification: "pending",
      status: "inactive",
    },
    {
      id: "#1003",
      fullname: "Ali Valiyev",
      email: "ali.valiyev@example.com",
      role: "admin",
      verification: "verified",
      status: "active",
    },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (pathname.startsWith("/users/add")) {
    return <Outlet />;
  }

  const handleClick = () => {
    navigate("/users/add");
  };

  return (
    <div className="px-5 pt-1">
      <h2 className="text-[#0D0F11] text-[24px] font-bold max-[770px]:pt-2">
        Users
      </h2>

      <div className="min-h-[750px] bg-[#F8F8F8] mt-[29px] px-[27px] py-[30px]">
        <div className="flex justify-between gap-20">
          <div className="w-full grid grid-cols-4 gap-10">
            <Input placeholder="Search user" />
            <Select placeholder="Filter by role" className="h-12!" />
            <Select placeholder="Filter by status" className="h-12!" />
            <Select placeholder="Filter by verification" className="h-12!" />
          </div>
          <Button className="py-[23px]! px-10!" onClick={handleClick}>
            Add User
          </Button>
        </div>

        <div className="pt-5">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default memo(Users);
