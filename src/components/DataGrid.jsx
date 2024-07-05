import React from 'react';

const DataGrid = ({ columns, data }) => {
  return (
    <section className="w-full">
      <div className="overflow-x-auto rounded-sm">
        <table className="min-w-full bg-white border border-gray-200 table-fixed">
          <thead>
            <tr className="text-primaryText text-[14px]">
              {columns.map((col) => (
                <th key={col.accessor} className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                  {col.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="text-[#2E3851] text-[14px]">
                {columns.map((col) => (
                  <td key={col.accessor} className=" px-6 text-start py-4 border-b border-gray-200">
                    {Array.isArray(row[col.accessor])
                      ? row[col.accessor].map((icon, index) => (
                          <span key={index} className="inline-block mr-2">
                            {icon}
                          </span>
                        ))
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataGrid;
