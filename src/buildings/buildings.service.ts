import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Injectable()
export class BuildingsService {
  private buildings = [
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

  create(createBuildingDto: CreateBuildingDto) {
    const newBuilding = { id: this.buildings.length + 1, ...createBuildingDto };
    this.buildings.push(newBuilding);
    return 'Add new building successfully';
  }

  findAll() {
    return this.buildings;
  }

  findOne(id: number) {
    if (id > this.buildings.length || id < 1) {
      return 'Id is not valid';
    }
    const thisBuilding = this.buildings.find((building) => building.id === id);
    if (thisBuilding) {
      return thisBuilding;
    }
    return 'Building not found';
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
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

  remove(id: number) {
    const thisBuilding = this.buildings.find((building) => building.id === id);
    if (thisBuilding) {
      this.buildings.splice(id - 1, 1);
      return 'Remove building successfully';
    }
    return 'Building not found';
  }
}
