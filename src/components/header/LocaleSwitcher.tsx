"use client";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useTransition } from "react";

import { setUserLocale } from "@/i18n/service";
import { defaultLocale, locales } from "@/i18n/config";

export default function LocaleSwitcher({ defaultValue = defaultLocale }) {
  const [locale, setLocale] = useState(defaultValue);

  const [isPending, startTransition] = useTransition();

  function onChange(locale: string) {
    setLocale(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <button onClick={() => onChange(locale === "en" ? "zh" : "en")} className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
        <span className="text-gray-600 dark:text-gray-400 font-semibold text-md">{locale === "en" ? "中" : "En" }</span>
      </button>
    </div>
  );
}
