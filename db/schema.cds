namespace lectureschedule;

entity Rooms {
    key ID: Integer;
    name: String(200);
    seats: Integer;
    
}

entity Lectures {
    key ID: Integer;
}

