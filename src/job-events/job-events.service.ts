import { Injectable } from '@nestjs/common';
import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobEvent } from './entities/job-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobEventsService {
  constructor(
    @InjectRepository(JobEvent)
    private jobEventRepository: Repository<JobEvent>,
  ) {}
  private readonly jobEvents = [
    {
      id: 1,
      title: 'VNG University Week',
      description:
        'VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường của VNG. Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ nét về định hướng sự nghiệp tương lai của mình. Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!!',
      start: '2023-11-27T07:00:00.000Z',
      end: '2023-11-27T12:00:00.000Z',
      location:
        'Trụ sở chính VNG Campus (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM cơ sở Dĩ An lúc 7g30)',
      company: 'VNG Corporation',
      contact: '0123456789',
      link: 'https://forms.gle/gngbFUmqzCrXEbuA8',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 2,
      title: 'VNG University Week',
      description:
        'VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường của VNG. Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ nét về định hướng sự nghiệp tương lai của mình. Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!!',
      start: '2023-11-27T07:00:00.000Z',
      end: '2023-11-27T12:00:00.000Z',
      location:
        'Trụ sở chính VNG Campus (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM cơ sở Dĩ An lúc 7g30)',
      company: 'VNG Corporation',
      contact: '0123456789',
      link: 'https://forms.gle/gngbFUmqzCrXEbuA8',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 3,
      title: 'VNG University Week',
      description:
        'VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường của VNG. Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ nét về định hướng sự nghiệp tương lai của mình. Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!!',
      start: '2023-11-27T07:00:00.000Z',
      end: '2023-11-27T12:00:00.000Z',
      location:
        'Trụ sở chính VNG Campus (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM cơ sở Dĩ An lúc 7g30)',
      company: 'VNG Corporation',
      contact: '0123456789',
      link: 'https://forms.gle/gngbFUmqzCrXEbuA8',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 4,
      title: 'VNG University Week',
      description:
        'VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường của VNG. Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ nét về định hướng sự nghiệp tương lai của mình. Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!!',
      start: '2023-11-27T07:00:00.000Z',
      end: '2023-11-27T12:00:00.000Z',
      location:
        'Trụ sở chính VNG Campus (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM cơ sở Dĩ An lúc 7g30)',
      company: 'VNG Corporation',
      contact: '0123456789',
      link: 'https://forms.gle/gngbFUmqzCrXEbuA8',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
  ];

  create(createJobEventDto: CreateJobEventDto) {
    const newJobEvent = createJobEventDto;
    this.jobEventRepository.save(newJobEvent);
    return 'Add new jobEvent successfully';
  }

  findAll() {
    return this.jobEventRepository.find();
  }

  findOne(id: number) {
    const thisJobEvent = this.jobEventRepository.findOneBy({ id });
    if (thisJobEvent) {
      return thisJobEvent;
    }
    return 'JobEvent not found';
  }

  update(id: number, updateJobEventDto: UpdateJobEventDto) {
    return this.jobEventRepository.update(id, updateJobEventDto);
  }

  remove(id: number) {
    return this.jobEventRepository.delete(id);
  }
}
