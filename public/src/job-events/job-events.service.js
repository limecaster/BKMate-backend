"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobEventsService = void 0;
const common_1 = require("@nestjs/common");
let JobEventsService = class JobEventsService {
    constructor() {
        this.jobEvents = [
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
    }
    create(createJobEventDto) {
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
    findOne(id) {
        if (id > this.jobEvents.length || id < 1) {
            return 'Id is not valid';
        }
        const thisJobEvent = this.jobEvents.find((jobEvent) => jobEvent.id === id);
        if (thisJobEvent) {
            return thisJobEvent;
        }
        return 'JobEvent not found';
    }
    update(id, updateJobEventDto) {
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
    remove(id) {
        const thisJobEvent = this.jobEvents.find((jobEvent) => jobEvent.id === id);
        if (thisJobEvent) {
            this.jobEvents.splice(id - 1, 1);
            return 'Delete jobEvent successfully';
        }
        return 'JobEvent not found';
    }
};
exports.JobEventsService = JobEventsService;
exports.JobEventsService = JobEventsService = __decorate([
    (0, common_1.Injectable)()
], JobEventsService);
//# sourceMappingURL=job-events.service.js.map