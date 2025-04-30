// server/searchWords.ts

export interface WordEntry {
    indonesia: string;
    krama_inggil: string;
    krama: string;
    ngoko: string;
    deskripsi: string;
}

/**
 * Mencari padanan kata dalam data WordEntry berdasarkan query.
 * @param data Array WordEntry yang akan dicari
 * @param query Kata kunci pencarian
 * @returns Array WordEntry yang memenuhi kriteria pencarian
 */
export function searchWords(data: WordEntry[], query: string): WordEntry[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return data.filter((item) => {
        return (
            item.indonesia.toLowerCase().includes(q) ||
            item.krama_inggil.toLowerCase().includes(q) ||
            item.krama.toLowerCase().includes(q) ||
            item.ngoko.toLowerCase().includes(q)
        );
    });
}