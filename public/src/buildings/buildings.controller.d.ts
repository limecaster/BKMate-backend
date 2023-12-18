import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
export declare class BuildingsController {
    private readonly buildingsService;
    constructor(buildingsService: BuildingsService);
    create(createBuildingDto: CreateBuildingDto): string;
    findAll(): {
        id: number;
        name: string;
        description: string;
        image: string;
        location: string;
    }[];
    findOne(id: string): "Id is not valid" | "Building not found" | {
        id: number;
        name: string;
        description: string;
        image: string;
        location: string;
    };
    update(id: string, updateBuildingDto: UpdateBuildingDto): "Building not found" | "Update building successfully";
    remove(id: string): "Building not found" | "Remove building successfully";
}
