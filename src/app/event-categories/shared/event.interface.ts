import { Tabs } from "./tabs.enum";

export interface Event {
    name: String;
    eventId: number;
    status?: Tabs;
}
