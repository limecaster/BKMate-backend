"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobEventDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_job_event_dto_1 = require("./create-job-event.dto");
class UpdateJobEventDto extends (0, mapped_types_1.PartialType)(create_job_event_dto_1.CreateJobEventDto) {
}
exports.UpdateJobEventDto = UpdateJobEventDto;
//# sourceMappingURL=update-job-event.dto.js.map