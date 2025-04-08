"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { format, isBefore, startOfDay } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export const Search = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  return (
    <div className="z-10">
      <div className="h-[68px] bg-white py-2 pl-8 pr-2 lg:w-[990px] flex justify-between items-center drop-shadow-custom-drop rounded-[64px]">
        <div className="flex gap-10 w-[648px]">
          <div
            className="w-[200px] border-r-[1.5px] border-transparent"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            }}
          >
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              What are you planning?
            </p>
            <Input
              type="text"
              placeholder="Enter your activity"
              className="border-transparent shadow-none text-base font-medium p-0 placeholder:text-[#434242B2]"
            />
          </div>
          <div
            className="w-[200px] border-r-[1.5px] border-transparent"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            }}
          >
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              Where?
            </p>
            <Input
              type="text"
              placeholder="Enter the area"
              className="border-transparent shadow-none text-base font-medium p-0 placeholder:text-[#434242B2]"
            />
          </div>
          <div
            className="w-[200px] border-r-[1.5px] border-transparent"
          >
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              When?
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <p
                  className={cn(
                    "text-sm mt-2 font-medium bg-transparent shadow-none p-0 h-fit text-[#434242B2] cursor-pointer",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="text-sm font-medium text-[#434242B2]">
                      Select Date
                    </span>
                  )}
                </p>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 rounded-[19px]"
                align="start"
              >
                {/* <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={isDisabled}
                /> */}
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <Button className="w-[136px] h-[52px] rounded-[32px] py-[14px] px-[56px] bg-[#FDF1C3] shadow-none">
            <SearchIcon className="size-6 text-[#001224]" />
          </Button>
        </div>
      </div>
    </div>
  );
};
