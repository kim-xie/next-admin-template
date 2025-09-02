"use client";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useTransition } from "react";

import { setUserLocale } from "@/i18n/service";
import { defaultLocale, locales } from "@/i18n/config";

export default function LocaleSwitcher({ defaultValue = defaultLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState(defaultValue);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const [isPending, startTransition] = useTransition();

  function onChange(locale: string) {
    setLocale(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
      >
        <span className="block mr-1 font-medium text-theme-sm">{locale}</span>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[100px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <ul className="flex flex-col gap-1 pt-4 pb-3 dark:border-gray-800">
          {locales.map((locale) => (
            <li key={locale} onClick={() => (isPending ? "" : onChange(locale))}>
              <DropdownItem
                onItemClick={closeDropdown}
                tag="a"
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                {locale}
              </DropdownItem>
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}
