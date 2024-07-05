"use client";
import { createContext, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar({ children, isSidebarOpen }) {
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-primaryBackground border-r shadow-sm transition-all duration-300">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              width={150}
              height={150}
              src="/images/logo.png"
              alt="logo"
              className={`overflow-hidden transition-all duration-300 ${
                isSidebarOpen ? "w-32" : "w-0"
              }`}
            />
          </div>

          <SidebarContext.Provider value={{ isSidebarOpen }}>
            <ul className="flex-1 px-3 my-2 text-primaryHeading font-medium">
              {children}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <div
              className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
                isSidebarOpen ? "w-52 ml-3" : "w-0"
              }`}
            >
              <p className="text-[#BECADA] font-medium">© 2024 RIVERLOOP</p>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, link }) {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <li className="relative flex items-center py-1 px-0 my-1 font-medium rounded-md cursor-pointer transition-colors duration-300 group">
      <Link
        href={link || "#"}
        className={`flex items-center w-full py-[8px] px-[10px] rounded-lg ${
          active
            ? "bg-[#682D910F]  text-primaryPurple"
            : "hover:bg-indigo-50s text-gray-600"
        }`}
      >
        <span className="">{icon}</span>
        <span
          className={`overflow-hidden transition-all duration-300 ${
            isSidebarOpen ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-4 h-4 text-white rounded bg-indigo-400 transition-all duration-300 ${
              isSidebarOpen ? "" : "top-2"
            }`}
          ></div>
        )}
      </Link>
      {!isSidebarOpen && (
        <div
          className={`absolute left-full z-30 rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
