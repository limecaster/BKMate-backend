"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobEventsController = void 0;
const common_1 = require("@nestjs/common");
const job_events_service_1 = require("./job-events.service");
const create_job_event_dto_1 = require("./dto/create-job-event.dto");
const update_job_event_dto_1 = require("./dto/update-job-event.dto");
const swagger_1 = require("@nestjs/swagger");
let JobEventsController = class JobEventsController {
    constructor(jobEventsService) {
        this.jobEventsService = jobEventsService;
    }
    create(createJobEventDto) {
        return this.jobEventsService.create(createJobEventDto);
    }
    findAll() {
        return this.jobEventsService.findAll();
    }
    findOne(id) {
        return this.jobEventsService.findOne(+id);
    }
    update(id, updateJobEventDto) {
        return this.jobEventsService.update(+id, updateJobEventDto);
    }
    remove(id) {
        return this.jobEventsService.remove(+id);
    }
};
exports.JobEventsController = JobEventsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Create job event successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_event_dto_1.CreateJobEventDto]),
    __metadata("design:returntype", void 0)
], JobEventsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all job events successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobEventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get job event successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobEventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update job event successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_event_dto_1.UpdateJobEventDto]),
    __metadata("design:returntype", void 0)
], JobEventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Delete job event successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobEventsController.prototype, "remove", null);
exports.JobEventsController = JobEventsController = __decorate([
    (0, common_1.Controller)('job-events'),
    __metadata("design:paramtypes", [job_events_service_1.JobEventsService])
], JobEventsController);
//# sourceMappingURL=job-events.controller.js.map