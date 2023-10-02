import React from "react";
import { menuItems } from "../data/constants";

export default function Sidebar() {
  return (
    <div className="w-[100px] shadow-md flex flex-col h-screen items-center pt-12 fixed left-0 z-[20]">
      {menuItems.map((item, index) => (
        <img
          key={index}
          src={item.icon}
          className={`${
            item.name === "menu"
              ? "w-[22px] mb-[90px]"
              : item.name === "home"
              ? "w-[36px] mb-[45px]"
              : "w-[33px]"
          }`}
          alt={item.name}
        />
      ))}
    </div>
  );
}
