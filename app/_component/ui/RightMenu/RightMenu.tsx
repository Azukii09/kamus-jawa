import React from "react";
import {SideMenu} from "@/lib/data/Sidebar";
import Link from "next/link";
import DoorOutSvg from "@/app/_component/icon/DoorOut";
import IndonesiaSVG from "@/app/_component/icon/Indonesia";
import UKSVG from "@/app/_component/icon/UK";

export default function RightMenu() {
    return (
        <section className={"hidden xl:flex w-3/12 h-full overflow-y-auto flex-col"}>
            <div
                className={"w-full min-h-20 flex items-center justify-between gap-4 text-primary px-20 py-4"}>
                <UKSVG className={"size-12"}/>
                <input
                    id="switch-link"
                    type="checkbox"
                    className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-stone-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-stone-200 after:bg-primary after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-primary checked:before:bg-stone-800 checked:after:border-stone-800"
                />
                <IndonesiaSVG className={"size-12"}/>
            </div>
            <div className={"w-full h-full flex flex-col items-center justify-between pb-8"}>
                <ul className={"mt-6 h-full flex flex-col justify-between"}>
                    <li className={"relative px-4 py-3 w-full"}>
                        {SideMenu.map((item, index) => (
                            <div className={"py-3 w-full"} key={index}>
                                <Link
                                    href={"/"}
                                    className={`${item.active ? "bg-white text-primary hover:text-red-500" : "hover:bg-white hover:text-red-500"} text-lg  py-2 px-6 inline-flex items-center w-full font-bold transition-colors duration-150 rounded-full`}
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