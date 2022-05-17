export interface Company {
    id: string;
    companyName: string,
    position: string,
    from: string,
    to: string,
    projects: Projects[],
}
export interface Projects {
    name: string;
    id: string;
}
