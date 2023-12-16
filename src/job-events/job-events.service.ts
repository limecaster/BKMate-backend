import { Injectable } from '@nestjs/common';
import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';

@Injectable()
export class JobEventsService {
  private readonly jobEvents = [
    {
      id: 1,
      title: 'Công ty cổ phần công nghệ Viettel',
      description: 'Tuyển dụng nhân viên',
      start: '2021-05-20T07:00:00.000Z',
      end: '2021-05-20T07:00:00.000Z',
      location: 'Hà Nội',
      company: 'Viettel',
      contact: '0123456789',
      link: 'https://www.viettel.com.vn/',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 2,
      title: 'Công ty cổ phần công nghệ Viettel',
      description: 'Tuyển dụng nhân viên',
      start: '2021-05-20T07:00:00.000Z',
      end: '2021-05-20T07:00:00.000Z',
      location: 'Hà Nội',
      company: 'Viettel',
      contact: '0123456789',
      link: 'https://www.viettel.com.vn/',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 3,
      title: 'Công ty cổ phần công nghệ Viettel',
      description: 'Tuyển dụng nhân viên',
      start: '2021-05-20T07:00:00.000Z',
      end: '2021-05-20T07:00:00.000Z',
      location: 'Hà Nội',
      company: 'Viettel',
      contact: '0123456789',
      link: 'https://www.viettel.com.vn/',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
    {
      id: 4,
      title: 'Công ty cổ phần công nghệ Viettel',
      description: 'Tuyển dụng nhân viên',
      start: '2021-05-20T07:00:00.000Z',
      end: '2021-05-20T07:00:00.000Z',
      location: 'Hà Nội',
      company: 'Viettel',
      contact: '0123456789',
      link: 'https://www.viettel.com.vn/',
      image: 'https://www.viettel.com.vn/images/logo.png',
      status: 'Đang mở',
      createdBy: 'admin',
    },
  ];

  create(createJobEventDto: CreateJobEventDto) {
    const newJobEvent = {
      id: this.jobEvents.length + 1,
      ...createJobEventDto,
    };
    this.jobEvents.push(newJobEvent);
    return 'Add new jobEvent successfully';
  }

  findAll() {
    return this.jobEvents;
  }

  findOne(id: number) {
    if (id > this.jobEvents.length || id < 1) {
      return 'Id is not valid';
    }
    const thisJobEvent = this.jobEvents.find((jobEvent) => jobEvent.id === id);
    if (thisJobEvent) {
      return thisJobEvent;
    }
    return 'JobEvent not found';
  }

  update(id: number, updateJobEventDto: UpdateJobEventDto) {
    const thisJobEvent = this.jobEvents.find((jobEvent) => jobEvent.id === id);
    if (thisJobEvent) {
      const updatedJobEvent = {
        ...thisJobEvent,
        ...updateJobEventDto,
      };
      this.jobEvents[id - 1] = updatedJobEvent;
      return 'Update jobEvent successfully';
    }
    return 'JobEvent not found';
  }

  remove(id: number) {
    const thisJobEvent = this.jobEvents.find((jobEvent) => jobEvent.id === id);
    if (thisJobEvent) {
      this.jobEvents.splice(id - 1, 1);
      return 'Delete jobEvent successfully';
    }
    return 'JobEvent not found';
  }
}
