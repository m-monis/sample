using { lectureschedule as my } from '../db/schema';

@path: 'service/lectureSchedule'
service LectureService {

    entity Rooms as projection on my.Rooms;

}