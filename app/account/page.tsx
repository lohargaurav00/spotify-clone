import Header from "@/components/Header";
import React from "react";
import AccountContent from "./components/AccountContent";

const Account = () => {
  return (
    <div
      className="
         w-full
         h-full
         bg-neutral-900
         overflow-hidden
         overflow-y-auto
        "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-4">
          <h1 className="text-white text-2xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
