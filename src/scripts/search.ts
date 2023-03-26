export interface PageLink {
    name: string;
    path: string;
}
interface SearchIndex {
    keyword: string;
    aliases: string[];
    pages: PageLink[];
}

import indexFile from "../../public/data/search-index.json";
const index: SearchIndex[] = indexFile;

const flatten = <Type>(accum: Type[], curr: Type[]) => accum.concat(curr)

export const queryPages = (query: string): PageLink[] => {
    // List of words in query
    const words: string[] = query.split(" ");
    const rawResults: SearchIndex[][] = words.map((word: string) => index.filter(element => (element.keyword == word) || element.aliases.includes(word)));
    if (rawResults.length === 0)
        return [];
    const rawResultsConcat: SearchIndex[] = rawResults.reduce(flatten);
    const resultPageLists: PageLink[][] = rawResultsConcat.map((item: SearchIndex) => item.pages);
    if (resultPageLists.length === 0)
        return [];
    const resultPages: PageLink[] = resultPageLists.reduce(flatten);
    const resultsUnique: PageLink[] = [...new Set(resultPages)];
    const results: PageLink[] = resultsUnique.sort((a: PageLink, b: PageLink) => a.name.localeCompare(b.name));
    return results;
}
