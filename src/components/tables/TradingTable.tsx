"use client";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { BoxIcon } from "@/icons";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
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
    market: "A股",
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
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedTrade, setselectedTrade] = useState<Trade | null>(null);
  const [tradeMarket, setTradeMarket] = useState("");
  const [tradeStartDate, setTradeStartDate] = useState("");
  const [tradeEndDate, setTradeEndDate] = useState("");
  const t = useTranslations("Trading");

  const handleDeleted = (trade: Trade) => {
    setselectedTrade(trade);
  };

  const handleEdit = (trade: Trade) => {
    resetModalFields();
    setselectedTrade(trade);
    setTradeStartDate(trade.openTime);
    setTradeEndDate(trade.closeTime || trade.openTime);
    openModal();
  };

  const resetModalFields = () => {
    setselectedTrade(null);
    setTradeMarket("");
    setTradeStartDate("");
    setTradeEndDate("");
  };

  // 新增或更新
  const handleAddOrUpdateTrade = () => {};
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <TableCell
                      key={item}
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      {t(`table_header_col${item}`)}
                    </TableCell>
                  );
                })}
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
                    <Button
                      size="sm"
                      variant="outline"
                      startIcon={<BoxIcon />}
                      onClick={() => handleDeleted(trade)}
                    >
                      删除
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      startIcon={<BoxIcon />}
                      className="ml-2"
                      onClick={() => handleEdit(trade)}
                    >
                      编辑
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] p-6 lg:p-10">
        <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
          <div>
            <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
              {selectedTrade ? "Edit Trade" : "Add Trade"}
            </h5>
          </div>
          <div className="mt-8">
            <div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Market
                </label>
                <input
                  id="event-title"
                  type="text"
                  value={tradeMarket}
                  onChange={(e) => setTradeMarket(e.target.value)}
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
            </div>
            <div className="mt-6"></div>

            <div className="mt-6">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Enter Start Date
              </label>
              <div className="relative">
                <input
                  id="event-start-date"
                  type="date"
                  value={tradeStartDate}
                  onChange={(e) => setTradeStartDate(e.target.value)}
                  className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Enter End Date
              </label>
              <div className="relative">
                <input
                  id="event-end-date"
                  type="date"
                  value={tradeEndDate}
                  onChange={(e) => setTradeEndDate(e.target.value)}
                  className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
            <button
              onClick={closeModal}
              type="button"
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={handleAddOrUpdateTrade}
              type="button"
              className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
            >
              {selectedTrade ? "Update Changes" : "Add Event"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
