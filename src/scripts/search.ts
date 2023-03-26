interface SearchIndex {
    keyword: string;
    aliases: string[];
    pages: string[];
}

import indexFile from "../../public/data/search-index.json";
const index: SearchIndex[] = indexFile;

const flatten = <Type>(accum: Type[], curr: Type[]) => accum.concat(curr)

const queryPages = (query: string): string[] => {
    // List of words in query
    const words: string[] = query.split(" ");
    const rawResults: SearchIndex[][] = words.map((word: string) => index.filter(element => (element.keyword == word) || element.aliases.includes(word)));
    if (rawResults.length === 0)
        return [];
    const rawResultsConcat: SearchIndex[] = rawResults.reduce(flatten);
    const resultPageLists: string[][] = rawResultsConcat.map((item: SearchIndex) => item.pages);
    if (resultPageLists.length === 0)
        return [];
    const resultPages: string[] = resultPageLists.reduce(flatten);
    const resultsUnique: string[] = [...new Set(resultPages)];
    const results: string[] = resultsUnique.sort((a: string, b: string) => a.localeCompare(b));
    return results;
}

export default queryPages;
