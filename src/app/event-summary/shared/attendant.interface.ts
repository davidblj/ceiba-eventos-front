import { AssignedResource } from "./assigned-resource.interface";

export interface Attendant {
    employee: String;    
    location: String;
    insertionDate: string;
    assignedResources: AssignedResource[];
}
