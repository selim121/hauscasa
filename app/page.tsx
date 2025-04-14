"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="max-w-[1440px] px-4 md:px-10 xl:px-20 mx-auto">
      <div className="flex items-center justify-start mt-5">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="max-w-[1062px] mx-auto py-10 md:py-20 xl:py-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 rounded-[12px] bg-gradient-to-b from-[#80CFEC3D] to-[#149FD23D] [background-image:linear-gradient(171deg,rgba(128,207,236,0.24)_-10.49%,rgba(20,159,210,0.24)_119.61%)] p-10">
          <h1 className="max-w-[410px] text-[24px] md:text-[32px] text-[#1D1F2C] font-semibold leading-[160%]">
            999plus - Human Rights Breach Report
          </h1>

          <div className="w-full space-y-5">
            <div className="flex flex-col items-start gap-2">
              <label className="text-[16px] font-normal text-[#4A4C56]">
                Date of Breach *
              </label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full px-[18px] justify-between text-left font-normal"
                  >
                    <span className="text-[#A5A5AB] font-poppins text-[16px] font-normal leading-[160%]">
                      {date ? format(date, "dd/MM/yyyy") : "dd/mm/yyyy"}
                    </span>
                    {/* Custom SVG Calendar Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        opacity="0.4"
                        d="M3 18C3 20 4 21 6 21H18C20 21 21 20 21 18V9H3V18Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M18 4.5H16.75V3C16.75 2.586 16.414 2.25 16 2.25C15.586 2.25 15.25 2.586 15.25 3V4.5H8.75V3C8.75 2.586 8.414 2.25 8 2.25C7.586 2.25 7.25 2.586 7.25 3V4.5H6C4 4.5 3 5.5 3 7.5V9H21V7.5C21 5.5 20 4.5 18 4.5Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M8.02002 14C7.46802 14 7.01489 13.552 7.01489 13C7.01489 12.448 7.45801 12 8.01001 12H8.02002C8.57302 12 9.02002 12.448 9.02002 13C9.02002 13.552 8.57202 14 8.02002 14ZM13.02 13C13.02 12.448 12.573 12 12.02 12H12.01C11.458 12 11.0149 12.448 11.0149 13C11.0149 13.552 11.468 14 12.02 14C12.572 14 13.02 13.552 13.02 13ZM17.02 13C17.02 12.448 16.573 12 16.02 12H16.01C15.458 12 15.0149 12.448 15.0149 13C15.0149 13.552 15.468 14 16.02 14C16.572 14 17.02 13.552 17.02 13ZM9.02002 17C9.02002 16.448 8.57302 16 8.02002 16H8.01001C7.45801 16 7.01489 16.448 7.01489 17C7.01489 17.552 7.46802 18 8.02002 18C8.57202 18 9.02002 17.552 9.02002 17ZM13.02 17C13.02 16.448 12.573 16 12.02 16H12.01C11.458 16 11.0149 16.448 11.0149 17C11.0149 17.552 11.468 18 12.02 18C12.572 18 13.02 17.552 13.02 17ZM17.02 17C17.02 16.448 16.573 16 16.02 16H16.01C15.458 16 15.0149 16.448 15.0149 17C15.0149 17.552 15.468 18 16.02 18C16.572 18 17.02 17.552 17.02 17Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-[16px] font-normal text-[#4A4C56]">
                Court / Body *
              </label>
              <Select>
                <SelectTrigger className="w-full px-[18px] py-[14px] justify-between text-left font-normal bg-white text-[#A5A5AB] font-poppins text-[16px] leading-[160%]">
                  <SelectValue
                    placeholder="Select an option"
                    className="text-[#A5A5AB] font-poppins text-[16px] font-normal leading-[160%]"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecj">European Court of Justice</SelectItem>
                  <SelectItem value="echr">
                    European Court of Human Rights
                  </SelectItem>
                  <SelectItem value="national">National Court</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-[16px] font-normal text-[#4A4C56]">
                Right Breached *
              </label>
              <Select>
                <SelectTrigger className="w-full px-[18px] py-[14px] justify-between text-left font-normal bg-white text-[#A5A5AB] font-poppins text-[16px] leading-[160%]">
                  <SelectValue
                    placeholder="Article 8 - Right to privacy"
                    className="text-[#A5A5AB] font-poppins text-[16px] font-normal leading-[160%]"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article-8">
                    Article 8 - Right to privacy
                  </SelectItem>
                  <SelectItem value="article-10">
                    Article 10 - Freedom of expression
                  </SelectItem>
                  <SelectItem value="article-14">
                    Article 14 - Non-discrimination
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-[16px] font-normal text-[#4A4C56]">
                Describe Breach
              </label>
              <Textarea
                placeholder="Share your thoughts..."
                className="w-full h-[164px] px-[18px] py-[14px] justify-between text-left font-normal bg-white text-[#A5A5AB] font-poppins text-[16px] leading-[160%] resize-none"
              />
            </div>

            <Button className="w-full p-[14px] text-[20px] bg-[#3B82F6] rounded-[10px] leading-[140%] text-[#FEF7F9] font-medium">
              Submit Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
