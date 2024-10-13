import SideBar from "@/components/SideBar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstname: "Akilesh", lastname: "KR" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user = {loggedInUser.firstname} />
      {children}
    </main>
  );
}
