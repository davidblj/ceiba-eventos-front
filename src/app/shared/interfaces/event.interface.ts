
interface Input {
    name: String;
    description?: String;
    price: number;
}

interface Resource {
    name: String;
    description?: String;
    price?: number;
    amount?: number;
}

export interface Event {
    name: String;
    description?: String;
    resources: Resource[];
    input?: Input[];
}
