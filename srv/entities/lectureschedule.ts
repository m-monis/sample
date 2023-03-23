export interface IRooms {
    ID: number;
    name: string;
    seats: number;
}

export interface ILectures {
    ID: number;
}

export enum Entity {
    Rooms = "lectureschedule.Rooms",
    Lectures = "lectureschedule.Lectures"
}

export enum SanitizedEntity {
    Rooms = "Rooms",
    Lectures = "Lectures"
}
