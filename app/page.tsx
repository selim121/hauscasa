"use client";

import HRBRForm from "@/components/forms/HRBRForm";
import React from "react";

export default function Home() {
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

          {/* HRBR Form */}
          <HRBRForm />
        </div>
      </div>
    </div>
  );
}
