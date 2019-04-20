
export enum InquiryModalStateResponse {
    clickedOnLeftButton = 1,
    clickedOnRightButton
}

export interface InquiryModalData {    
    inquiry: String;
    leftButtonMessage: String;
    rightButtonMessage: String;
}
