export interface PageLink {
    name: string;
    path: string;
    type: string;
    meta: string[];
}

import indexFile from "../../public/data/search-index.json";
const index: PageLink[] = indexFile;

const flatten = <Type>(accum: Type[], curr: Type[]) => accum.concat(curr)

export const queryPages = (query: string): PageLink[] => {
    // List of words in query
    const words: string[] = query.split(" ");
    const rawResults: PageLink[][] = words.map((word: string) => index.filter((page: PageLink) => page.meta.includes(word)));
    if (rawResults.length === 0) return [];
    const results: PageLink[] = rawResults.reduce(flatten);
    return results;
}
