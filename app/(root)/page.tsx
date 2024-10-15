import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

  const Home = async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access your personal financing in minutes!"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000}
          />
        </header>
        Recent transactions
      </div>
      <RightSideBar user={loggedIn} banks={[{currentBalance: 10000.00},{currentBalance:100}]} transactions={[]}/>
    </section>
  );
};

export default Home;
