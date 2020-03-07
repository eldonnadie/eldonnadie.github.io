export class KimisProject {
    projectTitle: string;
    projectDescription: string;
    isCaseStudy: boolean;
    thumbnailUrl: string;
    isUIUX: boolean;
    url: string;
    role: string;
    challenges: Array<string> = [];
    purpose: string;
    tools: Array<string> = [];
    date: string = '';
    constructor(
        date?: string,
        url?: string,
        projectTitle?: string,
        projectDescription?: string,
        isCaseStudy?: boolean,
        thumbnailUrl?: string,
        isUIUX?: boolean,
        role?: string,
        challenges?: Array<string>,
        purpose?: string,
        tools?: Array<string>) {
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.isCaseStudy = isCaseStudy;
        this.thumbnailUrl = thumbnailUrl;
        this.isUIUX = isUIUX;
        this.url = url;
        this.role = role;
        this.challenges = challenges;
        this.purpose = purpose;
        this.tools = tools;
        this.date = date;
    }
}