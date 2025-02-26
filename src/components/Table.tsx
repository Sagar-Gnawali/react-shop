import React from "react";

type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
};

type TableProps<T> = {
  data: T[] | undefined;
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
};

function Table<T>({ data, columns, onRowClick }: TableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    //@ts-ignore
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key.toString()}>
                <div
                  className="header-content"
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  {column.label}
                  {column.sortable && (
                    <span className="sort-icon">
                      {sortConfig && sortConfig.key === column.key ? (
                        sortConfig.direction === "asc" ? (
                          <span>&#8593;</span>
                        ) : (
                          <span>&#8595;</span>
                        )
                      ) : (
                        <span>&#8597;</span>
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key.toString()}
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {row[column.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
