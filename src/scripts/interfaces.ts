export interface IAuthor {
    name: string,
    path: string,
    iconPath: string,
    entries: string[]
}
export interface IContainmentClass {
    id: string,
    name: string,
    tagline: string,
    desc: string
}
export enum EntryVisibilityEnum {
    Normal,
    Secret,
    Censored,
    Hidden
}
export interface IObjectEntry {
	id: string,
    vis?: string; // null = normal
	path: string,
	name: string,
	title: string,
	notes?: string|string[]
}
