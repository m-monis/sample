export interface IRooms {
    ID: number;
    name: string;
    seats: number;
}

export enum Entity {
    Rooms = "lectureschedule.Rooms"
}

export enum SanitizedEntity {
    Rooms = "Rooms"
}
