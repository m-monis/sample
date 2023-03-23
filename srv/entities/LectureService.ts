export interface IRooms {
    ID: number;
    name: string;
    seats: number;
}

export enum Entity {
    Rooms = "LectureService.Rooms"
}

export enum SanitizedEntity {
    Rooms = "Rooms"
}
