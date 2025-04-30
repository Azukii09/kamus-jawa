"use client"
import {Word} from "@/lib/data/word";
import {searchWords, WordEntry} from "@/lib/function/searchWord";
import React, {useState} from "react";
import SearchSVG from "@/app/_component/icon/Search";

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
            <ul className="space-y-2 rounded-xl bg-white p-2">
              {results.map((item, idx) => (
                  <li key={idx} className="p-2 border rounded">
                    <p><strong>Indonesia:</strong> {item.indonesia}</p>
                    <p><strong>Krama Inggil:</strong> {item.krama_inggil}</p>
                    <p><strong>Krama:</strong> {item.krama}</p>
                    <p><strong>Ngoko:</strong> {item.ngoko}</p>
                    <p><em>{item.deskripsi}</em></p>
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
