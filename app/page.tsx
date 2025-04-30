"use client"
import {Word} from "@/lib/data/word";
import {searchWords, WordEntry} from "@/lib/function/searchWord";
import React, {useState} from "react";
import SearchSVG from "@/app/_component/icon/Search";
import SoundSVG from "@/app/_component/icon/Sound";

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<WordEntry[]>([]);

  // Jalankan pencarian hanya saat tombol diklik
  const handleSearch = () => {
    const res = searchWords(Word, query);
    setResults(res);
  };
  return (
    <main className={"p-8"}>
      <div className="flex flex-col gap-8">
        <div className="w-full flex flex-1 items-center justify-between bg-white p-2 rounded-full px-4 gap-2">
          <div className={"flex items-center gap-2 bg-orange-500 p-1 rounded-full"}>
            <SearchSVG className={"size-5 text-white"} />
          </div>
          <input
              type="text"
              name="search"
              placeholder={"Search"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={"flex flex-1 bg-transparent border-none rounded-full focus:outline-none text-orange-400 focus:text-orange-500 placeholder-orange-300 px-4 py-1 focus:font-semibold"}
          />
          <button
              onClick={handleSearch}
              className="bg-orange-500 text-white px-3 py-1 rounded-full cursor-pointer"
          >
            Search
          </button>
        </div>

        {results.length > 0 ? (
            <ul className="space-y-2 rounded-xl">
              {results.map((item, idx) => (
                  <li key={idx} className=" flex flex-col gap-2 p-4 bg-white rounded-xl ">
                    <h1 className={"capitalize font-bold italic text-3xl text-center"}>{item.indonesia}</h1>
                    <div className={"flex justify-center items-center gap-2 py-4"}>
                      <div className={"bg-orange-500 size-9 rounded-full flex justify-center items-center"}>
                        <SoundSVG
                            className={"size-7 text-white rounded-full"}
                            bgColor={"bg-orange-500"}
                        />
                      </div>
                      <p>{"/\"\"/"}</p>
                    </div>
                    <p className={" text-center "}>Kata tersebut memiliki terjemahan</p>
                    <div className={"flex flex-col gap-2 px-4"}>
                      <p className={"pl-6 italic capitalize text-slate-500"}>
                        <strong className={"text-orange-500"}>Indonesia:</strong> {item.indonesia}
                      </p>
                      <p className={"pl-6 italic capitalize text-slate-500"}>
                        <strong className={"text-orange-500"}>Krama Inggil:</strong> {item.krama_inggil}
                      </p>
                      <p className={"pl-6 italic capitalize text-slate-500"}>
                        <strong className={"text-orange-500"}>Krama:</strong> {item.krama}
                      </p>
                      <p className={"pl-6 italic capitalize text-slate-500"}>
                        <strong className={"text-orange-500"}>Ngoko:</strong> {item.ngoko}
                      </p>
                      <p className={"font-semibold text-slate-500"}>{item.deskripsi}</p>
                    </div>
                  </li>
              ))}
            </ul>
        ) : (
            query && <p>Tidak ada padanan kata ditemukan.</p>
        )}
      </div>
    </main>
  );
}
