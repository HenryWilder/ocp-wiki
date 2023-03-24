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

export interface IReportBase {
    id: string,
    objectNumber: string,
    instance: string
}

export interface IInterviewMember {
    // [0] is Interviewer
    // [1] is Subject
    name?: string, // Default is redacted
    color?: string // Default is black
}
export interface IInterviewLine {
    speaker?: number, // If omitted, becomes "speakerless" (description of action)
    content: string
}
export interface IInterview {
    members: IInterviewMember[],
    body: IInterviewLine[]
}
export interface IInterviewLog extends IReportBase {
    interviewerTitle?: string, // Default is blank
    interviewerName?: string, // Default is redacted
    subjectName: string,
    topic: string,
    interview: IInterview,
    notes?: string // Default is "Nothing to note"
}

export interface IIncidentReport extends IReportBase {
    date?: string, // Default is redacted date
    incidentType?: string, // Default is redacted
    time?: string, // Default is redacted + "hrs"
    reportedBy?: string, // Default is redacted
    location?: string, // Default is redacted
    object: string,
    description: string,
    witnessExplanation?: string, // Default is "n/a"
    followup?: string // Default is "n/a"
}

export interface ITestLog extends IReportBase {
    date?: string, // Default is redacted date
    rsrTitle?: string, // (Dr, Rsr, Jr Rsr, etc.) Default is blank
    researcher?: string, // Default is redacted
    time?: string, // Default is redacted + "hrs"
    object: string,
    location?: string, // Default is redacted
    aprvrTitle?: string, // Default is blank
    approver?: string, // Default is redacted
    goal?: string, // Default is redacted
    procedure?: string, // Default is "n/a"
    results?: string, // Default is "n/a"
    comments?: string // Default is blank
}
