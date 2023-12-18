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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateJobEventDto {
}
exports.CreateJobEventDto = CreateJobEventDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Start must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Start must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'End must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'End must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "end", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Location must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Location must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Company must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Company must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Contact must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Contact must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Link must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Image must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Status must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Status must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'CreatedBy must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'CreatedBy must not be empty' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateJobEventDto.prototype, "createdBy", void 0);
//# sourceMappingURL=create-job-event.dto.js.map