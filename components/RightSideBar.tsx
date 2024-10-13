import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold">{user.firstName[0]}</span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{user.firstName}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-1">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
            <div className="relative flex flex-col items-center justify-center gap-5">
                <div className="realtive z-10">
                   <BankCard  account={banks[0]} userName={user.firstName} showBalance={false}/>
                </div>
                {banks[1] && (
                    <div className="absolute right-0 top-8 z-0 w-[90%]">
                        <BankCard  account={banks[1]} userName={user.firstName} showBalance={false}/>
                    </div>
                )}
            </div>
        )}
      </section>
    </aside>
  );
};

export default RightSideBar;
