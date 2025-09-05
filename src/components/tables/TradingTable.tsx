import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

import { useTranslations } from "next-intl";

interface Trade {
  id: number;
  market: string;
  symbol: string;
  direction: string;
  inputType: string;
  openPrice: number;
  closePrice: number;
  profit: number;
  duration: string;
  openTime: string;
  closeTime: string;
  status: string;
}

// Define the table data using the interface
const tableData: Trade[] = [
  {
    id: 1,
    market: "加密货币",
    symbol: "SOL/USDT 50X",
    direction: "多",
    openPrice: 210,
    closePrice: 220,
    profit: 1000,
    duration: "2H",
    openTime: "2025/09/04 10:00:00",
    closeTime: "2025/09/04 12:00:00",
    inputType: "手动录入",
    status: "Active",
  },
  {
    id: 2,
    market: "期货-外盘",
    symbol: "NQ-MINI",
    direction: "多",
    openPrice: 20000,
    closePrice: 22000,
    profit: 2000,
    duration: "2H",
    openTime: "2025/09/04 10:00:00",
    closeTime: "2025/09/04 12:00:00",
    inputType: "手动录入",
    status: "Active",
  },
  {
    id: 3,
    market: "外汇",
    symbol: "EURUSD",
    direction: "空",
    openPrice: 1.165,
    closePrice: 1.145,
    profit: 1000,
    duration: "2H",
    openTime: "2025/09/04 10:00:00",
    closeTime: "2025/09/04 12:00:00",
    inputType: "手动录入",
    status: "Active",
  },
  {
    id: 4,
    market: "大A",
    symbol: "600000",
    direction: "多",
    openPrice: 10,
    closePrice: 12,
    profit: 1000,
    duration: "2D",
    openTime: "2025/09/02 10:00:00",
    closeTime: "2025/09/04 12:00:00",
    inputType: "手动录入",
    status: "Active",
  },
  {
    id: 5,
    market: "期货-内盘",
    symbol: "AU2510",
    direction: "多",
    openPrice: 812,
    closePrice: 814,
    profit: 1000,
    duration: "2H",
    openTime: "2025/09/02 10:00:00",
    closeTime: "2025/09/02 12:00:00",
    inputType: "手动录入",
    status: "Active",
  },
];

export default function TradingTable() {
  const t = useTranslations("Trading");
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col1")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col2")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col3")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col4")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col5")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col6")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col7")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col8")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col9")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col10")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col11")}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {t("table_header_col12")}
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {trade.market}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {trade.symbol}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">{trade.direction}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.openPrice}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.closePrice}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.profit}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.duration}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.openTime}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.closeTime}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {trade.inputType}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        trade.status === "Active"
                          ? "success"
                          : trade.status === "Pending"
                            ? "warning"
                            : "error"
                      }
                    >
                      {trade.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    操作
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
