
export interface FetchJobDetailsInterface {
    (job_id: string): void;
}

export interface JobDetailsInterface {
    _id: string;
    organisationLogo: string;
    opportunityName: string;
    organisationName: string;
    applyLink: string;
    opportunityMode: string;
    city: string;
    applicationStartTime: string;
    minRange: string;
    opportunityLocation: string;
    maxRange: string;
    salaryUnit: string;
    applicationEndTime: string;
    description: string;
    skillsRequired: [string];
}

export interface FetchJobDetailsInterface {
    (job_id: string): void;
}

export interface JobCardInterface {
    fetchJobDetails: FetchJobDetailsInterface
    jobList: JobDetailsInterface[]
}
