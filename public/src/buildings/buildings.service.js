"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingsService = void 0;
const common_1 = require("@nestjs/common");
let BuildingsService = class BuildingsService {
    constructor() {
        this.buildings = [
            {
                id: 1,
                name: 'BK-B1',
                description: 'BK-B1 is the first building of BK',
                image: 'https://www.uit.edu.vn/sites/vi/files/banner_0.jpg',
                location: 'Dai hoc Quoc gia TPHCM',
            },
            {
                id: 2,
                name: 'BK-B2',
                description: 'BK-B2 is the second building of BK',
                image: 'https://www.uit.edu.vn/sites/vi/files/banner_0.jpg',
                location: 'Dai hoc Quoc gia TPHCM',
            },
            {
                id: 3,
                name: 'BK-B3',
                description: 'BK-B3 is the third building of BK',
                image: 'https://www.uit.edu.vn/sites/vi/files/banner_0.jpg',
                location: 'Dai hoc Quoc gia TPHCM',
            },
        ];
    }
    create(createBuildingDto) {
        const newBuilding = { id: this.buildings.length + 1, ...createBuildingDto };
        this.buildings.push(newBuilding);
        return 'Add new building successfully';
    }
    findAll() {
        return this.buildings;
    }
    findOne(id) {
        if (id > this.buildings.length || id < 1) {
            return 'Id is not valid';
        }
        const thisBuilding = this.buildings.find((building) => building.id === id);
        if (thisBuilding) {
            return thisBuilding;
        }
        return 'Building not found';
    }
    update(id, updateBuildingDto) {
        const thisBuilding = this.buildings.find((building) => building.id === id);
        if (thisBuilding) {
            const updatedBuilding = {
                ...thisBuilding,
                ...updateBuildingDto,
            };
            this.buildings[id - 1] = updatedBuilding;
            return 'Update building successfully';
        }
        return 'Building not found';
    }
    remove(id) {
        const thisBuilding = this.buildings.find((building) => building.id === id);
        if (thisBuilding) {
            this.buildings.splice(id - 1, 1);
            return 'Remove building successfully';
        }
        return 'Building not found';
    }
};
exports.BuildingsService = BuildingsService;
exports.BuildingsService = BuildingsService = __decorate([
    (0, common_1.Injectable)()
], BuildingsService);
//# sourceMappingURL=buildings.service.js.map