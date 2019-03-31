
interface AssignedResource {

    resource_id: number;
    shared_amount: number;
}

export interface Attendant {

    event_id?: number;
    location: String;
    employee_id: String;
    assigned_resources: AssignedResource[];
}
