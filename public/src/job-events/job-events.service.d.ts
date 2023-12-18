import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';
export declare class JobEventsService {
    private readonly jobEvents;
    create(createJobEventDto: CreateJobEventDto): string;
    findAll(): {
        id: number;
        title: string;
        description: string;
        start: string;
        end: string;
        location: string;
        company: string;
        contact: string;
        link: string;
        image: string;
        status: string;
        createdBy: string;
    }[];
    findOne(id: number): "Id is not valid" | {
        id: number;
        title: string;
        description: string;
        start: string;
        end: string;
        location: string;
        company: string;
        contact: string;
        link: string;
        image: string;
        status: string;
        createdBy: string;
    } | "JobEvent not found";
    update(id: number, updateJobEventDto: UpdateJobEventDto): "JobEvent not found" | "Update jobEvent successfully";
    remove(id: number): "JobEvent not found" | "Delete jobEvent successfully";
}
