import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
export declare class BuildingsService {
    private buildings;
    create(createBuildingDto: CreateBuildingDto): string;
    findAll(): {
        id: number;
        name: string;
        description: string;
        image: string;
        location: string;
    }[];
    findOne(id: number): "Id is not valid" | {
        id: number;
        name: string;
        description: string;
        image: string;
        location: string;
    } | "Building not found";
    update(id: number, updateBuildingDto: UpdateBuildingDto): "Building not found" | "Update building successfully";
    remove(id: number): "Building not found" | "Remove building successfully";
}
