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
exports.NamesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const nationalities_service_1 = require("../nationalities/nationalities.service");
const name_model_1 = require("./name.model");
let NamesService = class NamesService {
    constructor(nameModel, nationalitiesService) {
        this.nameModel = nameModel;
        this.nationalitiesService = nationalitiesService;
    }
    async create(createNameDto) {
        const name = new name_model_1.Name();
        name.name = createNameDto.name;
        name.type = createNameDto.type;
        name.gender = createNameDto.gender;
        name.nationalityId = createNameDto.nationalityId;
        return name.save();
    }
    async findAll() {
        return this.nameModel.findAll();
    }
    findOne(id) {
        return this.nameModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const name = await this.findOne(id);
        await name.destroy();
    }
};
NamesService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(name_model_1.Name)),
    __metadata("design:paramtypes", [Object, nationalities_service_1.NationalitiesService])
], NamesService);
exports.NamesService = NamesService;
//# sourceMappingURL=names.service.js.map