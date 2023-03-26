interface SearchIndex {
    keyword: string;
    aliases: string[];
    pages: string[];
}

import indexFile from "../../public/data/search-index.json";
const index: SearchIndex[] = indexFile;

const flatten = <Type>(accum: Type[], curr: Type[]) => accum.concat(curr)

export const queryPages = (query: string): string[] => {
    // List of words in query
    const words: string[] = query.split(" ");
    const results: string[] = [
        ...new Set(
            words
                .map((word: string) => index.filter(element => (element.keyword == word) || element.aliases.includes(word)))
                .reduce(flatten)
                .map((item: SearchIndex) => item.pages)
                .reduce(flatten)
                .sort((a: string, b: string) => a.localeCompare(b))
        )
    ];
    return results;
}
