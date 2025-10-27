import { memo } from "react";
import DataTable from "../../../shared/ui/DataTable/DataTable";

const OverviewRecentOrders = () => {
  const columns = [
    { key: "id", label: "Order ID" },
    { key: "customer", label: "Customer" },
    { key: "date", label: "Date" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ];

  const data = [
    {
      id: "#1001",
      customer: "John Doe",
      date: "2025-10-27",
      total: "$120.50",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "Jane Smith",
      date: "2025-10-26",
      total: "$75.00",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Ali Valiyev",
      date: "2025-10-25",
      total: "$54.90",
      status: "Cancelled",
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-[20px]">Recent orders</h2>

      <div className="pt-3">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default memo(OverviewRecentOrders);
