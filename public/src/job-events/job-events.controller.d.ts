import { JobEventsService } from './job-events.service';
import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';
export declare class JobEventsController {
    private readonly jobEventsService;
    constructor(jobEventsService: JobEventsService);
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
    findOne(id: string): "Id is not valid" | "JobEvent not found" | {
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
    };
    update(id: string, updateJobEventDto: UpdateJobEventDto): "JobEvent not found" | "Update jobEvent successfully";
    remove(id: string): "JobEvent not found" | "Delete jobEvent successfully";
}
