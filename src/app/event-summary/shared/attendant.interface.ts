import { AssignedResource } from "./assigned-resource.interface";

export interface Attendant {
    employee: String;    
    assignedResources: AssignedResource[];
}
