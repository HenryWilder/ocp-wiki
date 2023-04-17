import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export interface Searchable {
    name: string;
    path: string;
    description: string;
    iconPath?: string;
    keywords: string[];
    multiplier: number;
}

export const getSearchData = async (): Promise<Searchable[]> => {
    const objectCollection:    CollectionEntry<'objects'>[]             = await getCollection('objects', (o) => o.data.visibility != 'hidden');
    const authorCollection:    CollectionEntry<'authors'>[]             = await getCollection('authors');
    const classCollection:     CollectionEntry<'containment-classes'>[] = await getCollection('containment-classes');
    const siteCollection:      CollectionEntry<'containment-sites'>[]   = await getCollection('containment-sites');
    const taskForceCollection: CollectionEntry<'task-forces'>[]         = await getCollection('task-forces');
    const reportCollection:    CollectionEntry<'reports'>[]             = await getCollection('reports');

    const iconFromCategory = (category: string): string|undefined => {
        switch (category) {
            case 'Apollyon': return '/thumbnail-apollyon.png';
            case 'Catastrophic': return '/thumbnail-catastrophic.png';
            case 'Yaaqov': return '/thumbnail-yaaqov.png';
            case 'Esau': return '/thumbnail-esau.png';
            default: return undefined;
        }
    }

    // Object results
    const objectSearchData = objectCollection.map((e) => { return {
        name: `OCP-${e.data.name}: ${e.data.title} (${e.data.category}) [V${e.data.version}]`,
        path: `/objects/${e.slug}/`,
        description: e.data.description,
        iconPath: e.data.image ?? iconFromCategory(e.data.category),
        keywords: [...e.data.tags, e.data.description, e.data.title, 'objects', 'ocp', `ocp-${e.data.name}`, e.data.name, e.data.category, e.data.author],
        multiplier: 1 };
    });
        
    // Author results
    const authorSearchData = authorCollection.map((e) => { return {
        name: e.data.name,
        path: `/about/authors/${e.slug}/`,
        description: e.data.description,
        iconPath: e.data.icon,
        keywords: ['authors',e.data.name, e.data.description],
        multiplier: 4 };
    });
        
    // Class results
    const classSearchData = classCollection.map((e) => { return {
        name: e.data.name,
        path: `/info/containment-classes/${e.slug}/`,
        description: e.data.blurb,
        iconPath: iconFromCategory(e.data.name),
        keywords: ['classification', 'category', e.data.name, e.data.blurb],
        multiplier: 3 };
    });
        
    // Site results
    const siteSearchData = siteCollection.map((e) => { return {
        name: e.data.name,
        path: `/info/containment-sites/${e.slug}/`,
        description: e.data.blurb,
        keywords: ['site', e.data.name, e.data.blurb],
        multiplier: 3 };
    });
        
    // Task force results
    const taskForceSearchData = taskForceCollection.map((e) => { return {
        name: `MTF-${e.data.name}`,
        path: `/info/task-forces/${e.slug}/`,
        description: e.data.blurb,
        keywords: ['task force', 'mtf', e.data.name, e.slug, e.data.blurb],
        multiplier: 3 };
    });
        
    // Report results
    const reportSearchData = reportCollection.map((e) => { return {
        name: `${e.data.type} ${e.data.object} ${e.data.instance}`,
        path: `/info/task-forces/${e.slug}/`,
        description: `${e.data.type} #${e.data.instance} for OCP-${e.data.object} `,
        keywords: ['report', `${e.data.type} ${e.data.object} ${e.data.instance}`],
        multiplier: 1 };
    });

    return [...objectSearchData, ...authorSearchData, ...classSearchData, ...siteSearchData, ...taskForceSearchData, ...reportSearchData];
}
    