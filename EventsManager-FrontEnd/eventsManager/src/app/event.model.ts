// WIUT STUDENT ID: 00014725
export interface Event {
    EventId: number;
    EventName: string;
    EventDate: Date;
    Location: string;
    Cost: number;
    Language: string;
    UserId: number,
    User: {
        userId: 0, 
        userName: string;
        userEmail: string;
        userPhone: number
    }
}



