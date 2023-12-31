import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { SchoolAcademicProgram } from './entities/school-academicProgram.entity';
import { SchoolAchievement } from './entities/school-achivement.entity';
import { Repository } from 'typeorm';
@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private SchoolRepository: Repository<School>,
    @InjectRepository(SchoolAcademicProgram)
    private SchoolAcademicProgramRepository: Repository<SchoolAcademicProgram>,
    @InjectRepository(SchoolAchievement)
    private SchoolAchivementRepository: Repository<SchoolAchievement>,
  ) {
    // const school = new School();
    // const school_academicPrograms = new Array<SchoolAcademicProgram>();
    // const school_achivements = new Array<SchoolAchievement>();
    // this.achivement.forEach((element) => {
    //   const school_achivement = new SchoolAchievement();
    //   school_achivement.name = element.name;
    //   school_achivement.rank = element.rank;
    //   school_achivement.year = element.year;
    //   school_achivement.description = element.description;
    //   school_achivement.image = element.image;
    //   this.SchoolAchivementRepository.save(school_achivement);
    //   school_achivements.push(school_achivement);
    // });
    // this.academicPrograms.forEach((element) => {
    //   const school_academicProgram = new SchoolAcademicProgram();
    //   school_academicProgram.name = element.name;
    //   school_academicProgram.description = element.description;
    //   this.SchoolAcademicProgramRepository.save(school_academicProgram);
    //   console.log(school_academicProgram);
    //   school_academicPrograms.push(school_academicProgram);
    // });
    // school.name = this.schools.name;
    // school.address = this.schools.address;
    // school.history = this.schools.history;
    // school.achivement = school_achivements;
    // school.academicPrograms = school_academicPrograms;
    // this.SchoolRepository.save(school);
  }
  private schools = {
    name: 'Đại học Bách Khoa thành phố Hồ Chí Minh',
    address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
    history:
      'Trường Đại học Bách khoa - ĐHQG-HCM là một trường thành viên của hệ thống Đại học Quốc gia TP. Hồ Chí Minh. Trường được thành lập vào năm 1957 với tiền thân là Trung tâm Quốc gia Kỹ thuật. Hiện nay, Trường ĐH Bách Khoa là trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ lớn nhất các tỉnh phía Nam và là trường đại học kỹ thuật quan trọng của cả nước.',
  };
  private achivement = [
    {
      id: 1,
      name: 'QS World University Rankings',
      rank: '179',
      year: 2022,
      description:
        'ĐHQG - HCM đạt vị trí 179 trên bảng xếp hạng Quacquarelli Symnds (QS) ASIA năm 2022',
      image:
        'https://www.enago.com/academy/wp-content/uploads/2017/06/qs-compressed-750x300.jpg',
    },
    {
      id: 2,
      name: 'Times Higher Education World University Rankings',
      rank: '401 - 500',
      year: 2022,
      description:
        'ĐHQG - HCM đạt vị trí 401-500 trên bảng xếp hạng Times Higher Education (THE) World University Rankings năm 2022',
      image:
        'https://hueuni.edu.vn/ofic/uploads/images/hoangthienan/Times_Higher_Education_THE_World_University_Rankings_magazine_logo.png',
    },
  ];
  private academicPrograms = [
    {
      id: 1,
      name: 'Khoa cơ khí',
      description: '',
    },
    {
      id: 2,
      name: 'Khoa kỹ thuật địa chất và dầu khí',
      description: '',
    },
    {
      id: 3,
      name: 'Khoa điện - điện tử',
      description: '',
    },
    {
      id: 4,
      name: 'Khoa kỹ thuật giao thông',
      description: '',
    },
    {
      id: 5,
      name: 'Khoa kỹ thuật hóa học',
      description: '',
    },
    {
      id: 6,
      name: 'Khoa môi trường và tài nguyên',
      description: '',
    },
    {
      id: 7,
      name: 'Khoa quản lý công nghiệp',
      description: '',
    },
    {
      id: 8,
      name: 'Khoa khoa học ứng dụng',
      description: '',
    },
    {
      id: 9,
      name: 'Khoa công nghệ vật liệu',
      description: '',
    },
    {
      id: 10,
      name: 'Khoa kỹ thuật xây dựng',
      description: '',
    },
    {
      id: 11,
      name: 'Trung tâm đào tạo và bảo dưỡng công nghiệp',
      description: '',
    },
  ];
  create(createSchoolDto: CreateSchoolDto) {
    const school = new School();
    const school_academicPrograms = new Array<SchoolAcademicProgram>();
    const school_achivements = new Array<SchoolAchievement>();

    school.name = createSchoolDto.name;
    school.address = createSchoolDto.address;
    school.history = createSchoolDto.history;

    createSchoolDto.achivement.forEach((element) => {
      const school_achivement = new SchoolAchievement();
      school_achivement.name = element.name;
      school_achivement.rank = element.rank;
      school_achivement.year = element.year;
      school_achivement.description = element.description;
      school_achivement.image = element.image;

      this.SchoolAchivementRepository.save(school_achivement);
      school_achivements.push(school_achivement);
    });

    createSchoolDto.academicPrograms.forEach((element) => {
      const school_academicProgram = new SchoolAcademicProgram();
      school_academicProgram.name = element.name;
      school_academicProgram.description = element.description;

      this.SchoolAcademicProgramRepository.save(school_academicProgram);
      school_academicPrograms.push(school_academicProgram);
    });

    school.achivement = school_achivements;
    school.academicPrograms = school_academicPrograms;
    return this.SchoolRepository.save(school);
  }

  async find() {
    const school = await this.SchoolRepository.find();
    const school_academicPrograms =
      await this.SchoolAcademicProgramRepository.find();
    const school_achivements = await this.SchoolAchivementRepository.find();
    school[0].achivement = school_achivements;
    school[0].academicPrograms = school_academicPrograms;
    return school;
  }

  update(updateSchoolDto: UpdateSchoolDto) {
    this.SchoolRepository.update(updateSchoolDto.name, updateSchoolDto);

    return `This action updates school information`;
  }

  remove() {
    this.SchoolRepository.delete(this.schools.name);
    return `This action removes school information`;
  }
}
