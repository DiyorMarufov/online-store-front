import React from "react";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, string | number>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="w-full text-left">
      <thead className="bg-[#F1F4F8]">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-4 py-4">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-[#ffffff]">
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center py-3 text-gray-500"
            >
              No data available
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-cell={col.label}
                  className="data-cell border-b border-b-gray-300 text-[#6E6E6E] px-4 py-3"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
