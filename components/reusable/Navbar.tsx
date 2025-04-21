import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] px-4 md:px-10 xl:px-20 mx-auto">
      <Link href="/" className="flex items-center justify-start mt-5">
        <img src="/logo.png" alt="Logo" />
      </Link>
    </div>
  );
}
