"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex cursor-pointer mb-12 items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="mainLogo"
            className="size-[40px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">&nbsp;1Union</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({"brightness-[3] invert-0" : isActive})}
                />
                </div>
                <p className={cn("sidebar-label")}>
                {link.label}
                </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
