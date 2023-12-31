import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './entities/building.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,
  ) {}
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
    return this.buildingRepository.save(createBuildingDto);
  }

  findAll() {
    return this.buildingRepository.find();
  }

  findOne(id: number) {
    if (id > this.buildings.length || id < 1) {
      return 'Id is not valid';
    }
    return this.buildingRepository.findOneBy({ id });
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return this.buildingRepository.update(id, updateBuildingDto);
  }

  remove(id: number) {
    return this.buildingRepository.delete(id);
  }
}
