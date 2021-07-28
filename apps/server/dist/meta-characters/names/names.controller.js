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
exports.NamesController = void 0;
const common_1 = require("@nestjs/common");
const names_service_1 = require("./names.service");
const create_name_dto_1 = require("./dto/create-name.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const name_mapper_1 = require("./name.mapper");
let NamesController = class NamesController {
    constructor(namesService) {
        this.namesService = namesService;
    }
    async create(createNameDto) {
        const name = await this.namesService.create(createNameDto);
        return name_mapper_1.NameMapper.toResponse(name);
    }
    async findAll() {
        console.log("A1");
        const list = await this.namesService.findAll();
        console.log(list);
        return list.map((name) => name_mapper_1.NameMapper.toResponse(name));
    }
    async findOne(id) {
        const name = await this.namesService.findOne(id);
        return name_mapper_1.NameMapper.toResponse(name);
    }
    remove(id) {
        return this.namesService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_name_dto_1.CreateNameDto]),
    __metadata("design:returntype", Promise)
], NamesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NamesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NamesController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NamesController.prototype, "remove", null);
NamesController = __decorate([
    common_1.Controller('admin/names'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [names_service_1.NamesService])
], NamesController);
exports.NamesController = NamesController;
//# sourceMappingURL=names.controller.js.map