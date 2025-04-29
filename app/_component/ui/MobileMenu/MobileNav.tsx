"use client"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import ProfileSVG from "@/app/_component/icon/Profile";
import BellSVG from "@/app/_component/icon/Bell";

export default function MobileMenu() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className={"flex w-full border-y-[1px] p-4 justify-between gap-8"}>
            <div className="w-full flex flex-1 items-center justify-between bg-slate-700 p-2 rounded-full px-4 gap-4">
                <Image
                    src={"/img/search.png"}
                    alt={"search"}
                    width={16}
                    height={16}
                />
                <input
                    type="text"
                    name="search"
                    placeholder={"Search"}
                    className={"flex flex-1 bg-transparent border-none rounded-full focus:outline-none"}
                />
            </div>
            <div className="flex items-center gap-4 xl:gap-6 relative">
                <BellSVG className={"size-8"} />
                <div
                    className={"cursor-pointer"}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                    <ProfileSVG
                        className={"size-8"}
                    />
                </div>
                {isProfileOpen && (
                    <div className="absolute bg-slate-500 text-white p-4 rounded-md top-12 left-0 text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <Link href={"/public"}>Profile</Link>
                        <div className={"mt-2 cursor-pointer"}>Log out</div>
                    </div>
                )}
            </div>
        </div>
    );
}