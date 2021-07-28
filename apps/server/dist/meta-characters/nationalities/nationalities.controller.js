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
exports.NationalitiesController = void 0;
const common_1 = require("@nestjs/common");
const nationalities_service_1 = require("./nationalities.service");
const create_nationality_dto_1 = require("./dto/create-nationality.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const nationality_mapper_1 = require("./nationality.mapper");
let NationalitiesController = class NationalitiesController {
    constructor(nationalitiesService) {
        this.nationalitiesService = nationalitiesService;
    }
    async create(createNationalityDto) {
        const nationality = await this.nationalitiesService.create(createNationalityDto);
        return nationality_mapper_1.NationalityMapper.toResponse(nationality);
    }
    async findAll() {
        const list = await this.nationalitiesService.findAll();
        return list.map((nationality) => nationality_mapper_1.NationalityMapper.toResponse(nationality));
    }
    async findOne(id) {
        const nationality = await this.nationalitiesService.findOne(id);
        return nationality_mapper_1.NationalityMapper.toResponse(nationality);
    }
    remove(id) {
        return this.nationalitiesService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nationality_dto_1.CreateNationalityDto]),
    __metadata("design:returntype", Promise)
], NationalitiesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NationalitiesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NationalitiesController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NationalitiesController.prototype, "remove", null);
NationalitiesController = __decorate([
    common_1.Controller('nationalities'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [nationalities_service_1.NationalitiesService])
], NationalitiesController);
exports.NationalitiesController = NationalitiesController;
//# sourceMappingURL=nationalities.controller.js.map