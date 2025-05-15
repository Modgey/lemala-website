'use client';

import * as React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig'; // Path to your i18nConfig
import { UsaFlagIcon } from "./icons/usa-flag";
import { IsraelFlagIcon } from "./icons/israel-flag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = (newLocale: string) => {
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh(); // Important to server-render with new locale
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "bg-white h-10 px-3 rounded-md border border-gray-200 hover:bg-gray-50",
            "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
            "transition-colors"
          )}
        >
          <div className="flex items-center">
            {currentLocale === "en" ? (
              <UsaFlagIcon className="h-5 w-5 rounded-sm" />
            ) : (
              <IsraelFlagIcon className="h-5 w-5 rounded-sm" />
            )}
            <span className="ml-2 text-sm font-medium">
              {currentLocale === "en" ? "EN" : "HE"}
            </span>
          </div>
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white border border-gray-200 rounded-md shadow-sm p-1 min-w-32"
      >
        <DropdownMenuItem 
          onClick={() => handleChangeLanguage("en")}
          className={cn(
            "rounded flex items-center px-3 py-2 text-sm cursor-pointer",
            "focus:bg-gray-50 focus:text-black focus:ring-0 focus:outline-none",
            "hover:bg-gray-50 hover:text-black",
            currentLocale === "en" ? "bg-gray-50" : ""
          )}
        >
          <UsaFlagIcon className="mr-2 h-4 w-4 rounded-sm" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleChangeLanguage("he")}
          className={cn(
            "rounded flex items-center px-3 py-2 text-sm cursor-pointer",
            "focus:bg-gray-50 focus:text-black focus:ring-0 focus:outline-none",
            "hover:bg-gray-50 hover:text-black",
            currentLocale === "he" ? "bg-gray-50" : ""
          )}
        >
          <IsraelFlagIcon className="mr-2 h-4 w-4 rounded-sm" />
          <span>עברית</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 