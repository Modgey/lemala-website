'use client';

import * as React from "react";
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
  const [currentLanguage, setCurrentLanguage] = React.useState("en"); // Default to English

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
            {currentLanguage === "en" ? (
              <UsaFlagIcon className="h-5 w-5 rounded-sm" />
            ) : (
              <IsraelFlagIcon className="h-5 w-5 rounded-sm" />
            )}
            <span className="ml-2 text-sm font-medium">
              {currentLanguage === "en" ? "EN" : "HE"}
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
          onClick={() => setCurrentLanguage("en")}
          className={cn(
            "rounded flex items-center px-3 py-2 text-sm cursor-pointer",
            "focus:bg-gray-50 focus:text-black focus:ring-0 focus:outline-none",
            "hover:bg-gray-50 hover:text-black",
            currentLanguage === "en" ? "bg-gray-50" : ""
          )}
        >
          <UsaFlagIcon className="mr-2 h-4 w-4 rounded-sm" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setCurrentLanguage("he")}
          className={cn(
            "rounded flex items-center px-3 py-2 text-sm cursor-pointer",
            "focus:bg-gray-50 focus:text-black focus:ring-0 focus:outline-none",
            "hover:bg-gray-50 hover:text-black",
            currentLanguage === "he" ? "bg-gray-50" : ""
          )}
        >
          <IsraelFlagIcon className="mr-2 h-4 w-4 rounded-sm" />
          <span>עברית</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 