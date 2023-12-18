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
exports.ClubsController = void 0;
const common_1 = require("@nestjs/common");
const clubs_service_1 = require("./clubs.service");
const create_club_dto_1 = require("./dto/create-club.dto");
const update_club_dto_1 = require("./dto/update-club.dto");
const swagger_1 = require("@nestjs/swagger");
let ClubsController = class ClubsController {
    constructor(clubsService) {
        this.clubsService = clubsService;
    }
    create(createClubDto) {
        return this.clubsService.create(createClubDto);
    }
    findAll() {
        return this.clubsService.findAll();
    }
    findOne(id) {
        return this.clubsService.findOne(+id);
    }
    update(id, updateClubDto) {
        return this.clubsService.update(+id, updateClubDto);
    }
    remove(id) {
        return this.clubsService.remove(+id);
    }
};
exports.ClubsController = ClubsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Create club successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_club_dto_1.CreateClubDto]),
    __metadata("design:returntype", void 0)
], ClubsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all clubs successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClubsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get club successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClubsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update club successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_club_dto_1.UpdateClubDto]),
    __metadata("design:returntype", void 0)
], ClubsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Delete club successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClubsController.prototype, "remove", null);
exports.ClubsController = ClubsController = __decorate([
    (0, common_1.Controller)('clubs'),
    __metadata("design:paramtypes", [clubs_service_1.ClubsService])
], ClubsController);
//# sourceMappingURL=clubs.controller.js.map