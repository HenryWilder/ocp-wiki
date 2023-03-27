export interface IAuthor {
    name: string;
    path: string;
    iconPath: string;
    entries: string[];
}

// Interfaces that have info appear when hovered
export interface ITooltipBase {
    id: string; // The id associated with the element, both in the JSON and in the Info component
    name: string; 
    tagline: string;
    notes?: string|string[];
}
// Interfaces that appear in a card on an "info/" page
export interface ICardBase extends ITooltipBase {
    desc: string;
}
export interface IContainmentClass extends ICardBase {}
export interface IContainmentSite extends ICardBase {}
export interface ITaskForce extends ICardBase {}
export interface IObjectEntry extends ITooltipBase {
    vis?: string; // undefined = normal
	code: string;
}
export interface IRealityBender extends ICardBase {
    color: string;
}
export interface IStaffMember extends ITooltipBase {}

export interface IReportBase {
    id: string;
    objectNumber: string;
    instance: string;
}

export interface IInterviewMember {
    // [0] is Interviewer
    // [1] is Subject
    name?: string; // Default is redacted
    color?: string; // Default is black
}
export interface IInterviewLine {
    speaker?: number; // If omitted, becomes "speakerless" (description of action)
    content: string;
}
export interface IInterview {
    members: IInterviewMember[],
    body: IInterviewLine[]
}
export interface IInterviewLog extends IReportBase {
    interview: IInterview;
    /* Slots:
    interviewerTitle?: string; // Default is blank
    interviewerName?: string; // Default is redacted
    subjectName: string;
    topic: string;
    notes?: string; // Default is "Nothing to note"
    */
}

export interface IIncidentReport extends IReportBase {
    /* Slots:
    date?: string; // Default is redacted date
    incidentType?: string; // Default is redacted
    time?: string; // Default is redacted + "hrs"
    reportedBy?: string; // Default is redacted
    location?: string; // Default is redacted
    object: string;
    description: string;
    witnessExplanation?: string; // Default is "n/a"
    followup?: string // Default is "n/a"
    */
}

export interface ITestLog extends IReportBase {
    /* Slots:
    date?: string; // Default is redacted date
    researcher?: string; // Default is redacted
    time?: string; // Default is redacted + "hrs"
    object: string;
    location?: string; // Default is redacted
    approver?: string; // Default is redacted
    goal?: string; // Default is redacted
    procedure?: string; // Default is "n/a"
    results?: string; // Default is "n/a"
    comments?: string; // Default is blank
    */
}
