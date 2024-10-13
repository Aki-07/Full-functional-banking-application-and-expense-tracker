import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstname: "Akilesh", lastname: "KR" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedInUser.firstname} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={40}
            height={40}
            alt="logo"
          ></Image>
          <div>
            <MobileNav user={loggedInUser.firstname} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
