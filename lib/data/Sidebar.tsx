import DashboardSVG from "@/app/_component/icon/Dashboard";
import React from "react";
import HomeSVG from "@/app/_component/icon/Home";
import Profile2 from "@/app/_component/icon/Profile2";
import SettingSVG from "@/app/_component/icon/Setting";
import DictionarySVG from "@/app/_component/icon/Dictionary";
import ChatSvg from "@/app/_component/icon/Chat";
import Chat2Svg from "@/app/_component/icon/Chat2";
import JatimSVG from "@/app/_component/icon/Jatim";

export const SideMenu = [
    {
        id:1,
        menuName:"Papan Pedoman",
        icon:<DashboardSVG className={"size-7"}/>,
        link:"/",
        active:false,
    },
    {
        id:2,
        menuName:"Beranda",
        icon:<HomeSVG className={"size-7"}/>,
        link:"/",
        active:false,
    },
    {
        id:3,
        menuName:"Profil",
        icon:<Profile2 className={"size-7"}/>,
        link:"/",
        active:false,
    },
    {
        id:4,
        menuName:"Kamus",
        icon:<DictionarySVG className={"size-7"}/>,
        link:"/",
        active:true,
    },
    {
        id:5,
        menuName:"Cerita Rakyat",
        icon:<ChatSvg className={"size-7"}/>,
        link:"/",
        active:false,
    },
    {
        id:6,
        menuName:"Kebudayaan",
        icon:<JatimSVG className={"size-7"}/>,
        link:"/",
        active:false,
    },
    {
        id:7,
        menuName:"Pengaturan",
        icon:<SettingSVG className={"size-7"}/>,
        link:"/",
        active:false,
    },
]