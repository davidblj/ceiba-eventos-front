import { Resource } from "./resource.interface";
import { Attendant } from "./attendant.interface";

export interface EventSummary {
    name: String;
    insertionDate: string;
    resources: Resource[];
    attendants: Attendant[];
}
