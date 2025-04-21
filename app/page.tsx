"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [alias, setAlias] = useState("");

  const handleAccess = () => {
    if (!alias.trim()) {
      alert("Please enter an alias code");
      return;
    }
    // Here you can add your logic to handle the alias access
    // For example, redirect to a specific page or make an API call
    console.log("Accessing with alias:", alias);
  };

  return (
    <>
      <div className="max-w-[846px] mx-auto mt-[85px] flex flex-col rounded-[12px] bg-gradient-to-b from-[#80CFEC3D] to-[#149FD23D] [background-image:linear-gradient(171deg,rgba(128,207,236,0.24)_-10.49%,rgba(20,159,210,0.24)_119.61%)] p-6 md:p-10">
        <div className="max-w-[536px] mx-auto flex flex-col items-center justify-center gap-2 pb-[10px] border-b-[2px] border-b-[#3B82F6] mb-[38px]">
          <h1 className="shrink-0 text-center text-[24px] md:text-[32px] text-[#1D1F2C] font-semibold leading-[160%]">
            999plus - Case Submission Form
          </h1>
          <p className="max-w-[330px] mx-auto text-[16px] text-center leading-[160%] font-normal text-[#1D1F2C]">
            Anonymous. Secure. Tamper-proof. Submit your case without logging
            in.
          </p>
        </div>
        <div className="w-full flex gap-6">
          <Link
            href="/form"
            className="w-full py-4 px-7 bg-[#1D1F2C] text-white rounded-[10px] text-[16px] font-semibold leading-[160%] text-center"
          >
            Start New Submission
          </Link>
          <Link
            href="/secure-application"
            className="w-full py-4 px-7 bg-[#1D1F2C] text-white rounded-[10px] text-[16px] font-semibold leading-[160%] text-center"
          >
            Secure Application
          </Link>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <div className="flex flex-col items-start gap-2">
            <label className="text-[16px] font-normal text-[#4A4C56]">
              Return with Alias *
            </label>
            <Input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="h-14 bg-white placeholder:text-[#A5A5AB] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[160%] text-center"
              placeholder="Enter your alias ccde"
            />
          </div>
          <Button
            onClick={handleAccess}
            className="w-full h-14 p-[14px] flex items-center justify-center gap-6 text-[20px] bg-[#3B82F6] cursor-pointer rounded-[10px] leading-[140%] text-[#FEF7F9] font-medium"
          >
            Access
          </Button>
        </div>
      </div>
    </>
  );
}
