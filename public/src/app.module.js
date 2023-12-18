"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const clubs_controller_1 = require("./clubs/clubs.controller");
const users_controller_1 = require("./users/users.controller");
const buildings_controller_1 = require("./buildings/buildings.controller");
const job_events_controller_1 = require("./job-events/job-events.controller");
const buildings_module_1 = require("./buildings/buildings.module");
const clubs_module_1 = require("./clubs/clubs.module");
const users_module_1 = require("./users/users.module");
const job_events_module_1 = require("./job-events/job-events.module");
const clubs_service_1 = require("./clubs/clubs.service");
const users_service_1 = require("./users/users.service");
const buildings_service_1 = require("./buildings/buildings.service");
const job_events_service_1 = require("./job-events/job-events.service");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            buildings_module_1.BuildingsModule,
            clubs_module_1.ClubsModule,
            users_module_1.UsersModule,
            job_events_module_1.JobEventsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [
            app_controller_1.AppController,
            clubs_controller_1.ClubsController,
            users_controller_1.UsersController,
            buildings_controller_1.BuildingsController,
            job_events_controller_1.JobEventsController,
        ],
        providers: [
            app_service_1.AppService,
            clubs_service_1.ClubsService,
            users_service_1.UsersService,
            buildings_service_1.BuildingsService,
            job_events_service_1.JobEventsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map