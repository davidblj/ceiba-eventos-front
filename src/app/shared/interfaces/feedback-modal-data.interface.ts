
export enum Status {
    success = 1,
    fail
}

export interface FeedbackModalData {

    status: Status;
    message: String;
    iconSource: String;
    successButtonMessage?: String;
    dismissButtonMessage?: String;
    eventId?: number;
}
