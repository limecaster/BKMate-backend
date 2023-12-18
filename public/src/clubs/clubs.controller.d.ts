import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
export declare class ClubsController {
    private readonly clubsService;
    constructor(clubsService: ClubsService);
    create(createClubDto: CreateClubDto): string;
    findAll(): {
        id: number;
        name: string;
        description: string;
        image: string;
        contact: string;
    }[];
    findOne(id: string): "Id is not valid" | "Club not found" | {
        id: number;
        name: string;
        description: string;
        image: string;
        contact: string;
    };
    update(id: string, updateClubDto: UpdateClubDto): "Club not found" | "Update club successfully";
    remove(id: string): "Club not found" | "Remove club successfully";
}
