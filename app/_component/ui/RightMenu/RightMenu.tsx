"use client"
import React, {useState} from "react";
import {SideMenu} from "@/lib/data/Sidebar";
import Link from "next/link";
import DoorOutSvg from "@/app/_component/icon/DoorOut";
import IndonesiaSVG from "@/app/_component/icon/Indonesia";
import UKSVG from "@/app/_component/icon/UK";
import Image from "next/image";
import {cerita} from "@/lib/data/cerita";
import {it} from "node:test";

export default function RightMenu() {
    const [newsOpen, setNewsOpen] = useState(false);
    return (
        <section className={"hidden xl:flex w-3/12 h-full overflow-y-auto flex-col"}>
            <div className={"w-full min-h-20 flex items-center justify-between gap-4 text-primary px-20 py-4"}>
                <UKSVG className={"size-12"}/>
                <input
                    id="switch-link"
                    type="checkbox"
                    className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-stone-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-stone-200 after:bg-primary after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-primary checked:before:bg-stone-800 checked:after:border-stone-800"
                />
                <IndonesiaSVG className={"size-12"}/>
            </div>
            <div className={"flex items-center justify-center p-8 w-full"}>
                <div className={"flex flex-col w-full items-center p-6 gap-3 rounded-xl shadow-md shadow-slate-400 border-white border-[0.5px]"}>
                    <div className={"relative size-32 rounded-full bg-white shadow-sm shadow-slate-400"}>
                        <Image
                            src={"/img/profile2.jpg"}
                            alt={"profile"}
                            className={"rounded-full object-cover w-full h-full"}
                            fill
                        />
                    </div>
                    <span className={"font-bold text-xl "}>Mochamad Dava</span>
                    <span>21 Tahun</span>
                </div>
            </div>
            <div className={"flex items-center justify-center p-8 w-full"}>
                <div className={"flex flex-col w-full items-center justify-between gap-3"}>
                    <button
                        onClick={() => setNewsOpen(!newsOpen)}
                        className="w-full font-bold text-2xl rounded-lg px-4 py-2 flex items-center justify-between gap-2"
                    >
                        <span>Bacaan Terkini</span>
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${newsOpen ? '-rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>

                    {newsOpen &&
                        <div className="flex flex-col gap-4 mt-4">
                            {cerita.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 border-[0.5px] border-white rounded-xl shadow-md shadow-slate-400">
                                    <div className="relative w-24 h-24 bg-white shadow-sm shadow-slate-400 rounded-lg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover rounded-lg"
                                            fill
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <h3 className="font-bold text-primary line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}