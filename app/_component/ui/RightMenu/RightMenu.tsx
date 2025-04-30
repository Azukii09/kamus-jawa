import React from "react";
import {SideMenu} from "@/lib/data/Sidebar";
import Link from "next/link";
import DoorOutSvg from "@/app/_component/icon/DoorOut";

export default function RightMenu() {
    return (
        <section className={"hidden xl:flex w-3/12 h-full overflow-y-auto flex-col"}>
            <div className={"w-full min-h-20 flex items-center justify-center gap-4 text-primary py-12"}>
                <span>bahasa</span>
                <span>bahasa</span>
            </div>
            <div className={"w-full h-full flex flex-col items-center justify-between pb-8"}>
                <ul className={"mt-6 h-full flex flex-col justify-between"}>
                    <li className={"relative px-4 py-3 w-full"}>
                        {SideMenu.map((item, index) => (
                            <div className={"py-3 w-full"} key={index}>
                                <Link
                                    href={"/"}
                                    className={`${item.active? "bg-white text-primary hover:text-red-500":"hover:bg-white hover:text-red-500"} text-lg  py-2 px-6 inline-flex items-center w-full font-bold transition-colors duration-150 rounded-full`}
                                >
                                    {item.icon}
                                    <span className="ml-4">{item.menuName}</span>
                                </Link>
                            </div>
                        ))}
                    </li>
                    <li className={"relative px-4 py-3 w-full"}>
                        <Link
                            href={"/"}
                            className={`text-lg hover:bg-white hover:text-red-500 py-2 px-6 inline-flex items-center w-full font-bold transition-colors duration-150 rounded-full`}
                        >
                            <DoorOutSvg className={"size-7"}/>
                            <span className="ml-4">Keluar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}