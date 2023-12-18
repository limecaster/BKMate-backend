import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
export declare class ClubsService {
    private clubs;
    create(createClubDto: CreateClubDto): string;
    findAll(): {
        id: number;
        name: string;
        description: string;
        image: string;
        contact: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        description: string;
        image: string;
        contact: string;
    } | "Id is not valid" | "Club not found";
    update(id: number, updateClubDto: UpdateClubDto): "Club not found" | "Update club successfully";
    remove(id: number): "Club not found" | "Remove club successfully";
}
