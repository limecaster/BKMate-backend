import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  private schools = [
    {
      name: 'Đại học Bách Khoa thành phố Hồ Chí Minh',
      address: '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh',
      history:
        'Trường Đại học Bách khoa - ĐHQG-HCM là một trường thành viên của hệ thống Đại học Quốc gia TP. Hồ Chí Minh. Trường được thành lập vào năm 1957 với tiền thân là Trung tâm Quốc gia Kỹ thuật. Hiện nay, Trường ĐH Bách Khoa là trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ lớn nhất các tỉnh phía Nam và là trường đại học kỹ thuật quan trọng của cả nước.',
      achivement: [
        {
          id: 1,
          name: 'QS World University Rankings',
          rank: 179,
          year: 2022,
          description:
            'ĐHQG - HCM đạt vị trí 179 trên bảng xếp hạng Quacquarelli Symnds (QS) ASIA năm 2022',
          image:
            'https://www.enago.com/academy/wp-content/uploads/2017/06/qs-compressed-750x300.jpg',
        },
        {
          id: 2,
          name: 'Times Higher Education World University Rankings',
          rank: 401 - 500,
          year: 2022,
          description:
            'ĐHQG - HCM đạt vị trí 401-500 trên bảng xếp hạng Times Higher Education (THE) World University Rankings năm 2022',
          image:
            'https://hueuni.edu.vn/ofic/uploads/images/hoangthienan/Times_Higher_Education_THE_World_University_Rankings_magazine_logo.png',
        },
      ],
      academicPrograms: [
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
      ],
    },
  ];
  create(createSchoolDto: CreateSchoolDto) {
    const newSchool = {
      ...createSchoolDto,
    };
    this.schools.push(newSchool);
    return 'This action adds a new school';
  }

  find() {
    const schools = this.schools[0];
    return schools;
  }

  update(updateSchoolDto: UpdateSchoolDto) {
    this.schools[0].name = updateSchoolDto.name;
    this.schools[0].address = updateSchoolDto.address;
    this.schools[0].history = updateSchoolDto.history;
    this.schools[0].achivement = updateSchoolDto.achivement;
    this.schools[0].academicPrograms = updateSchoolDto.academicPrograms;

    return `This action updates school information`;
  }

  remove() {
    this.schools.pop();
    return `This action removes school information`;
  }
}
