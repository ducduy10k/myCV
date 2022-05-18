import { DateRangePickerDayClassKey } from "@mui/x-date-pickers-pro";

export interface Company {
    id: string;
    companyName: string,
    position: string,
    from: Date,
    to: Date,
    projects: Projects[],
}
export interface Projects {
    name: string;
    id: string;
}
