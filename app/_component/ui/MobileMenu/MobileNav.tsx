"use client"
import {useState} from "react";
import Link from "next/link";
import ProfileSVG from "@/app/_component/icon/Profile";
import BellSVG from "@/app/_component/icon/Bell";
import SearchSVG from "@/app/_component/icon/Search";

export default function MobileMenu() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className={"flex w-full border-white border-y-[1px] p-4 justify-between gap-8"}>
            <div className="w-full flex flex-1 items-center justify-between bg-white p-2 rounded-full px-4 gap-4">
                <SearchSVG className={"size-5 text-primary"} />
                <input
                    type="text"
                    name="search"
                    placeholder={"Search"}
                    className={"flex flex-1 bg-transparent border-none rounded-full focus:outline-none placeholder-placeholder"}
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
                    <div className="absolute bg-background font-bold text-white p-4 rounded-md top-12 left-0 text-md z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <Link href={"/public"}>Profile</Link>
                        <div className={"mt-2 cursor-pointer"}>Log out</div>
                    </div>
                )}
            </div>
        </div>
    );
}