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
exports.NationalitiesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const nationality_model_1 = require("./nationality.model");
let NationalitiesService = class NationalitiesService {
    constructor(nationalityModel) {
        this.nationalityModel = nationalityModel;
    }
    async create(createNationalityDto) {
        const nationality = new nationality_model_1.Nationality();
        nationality.name = createNationalityDto.name;
        return nationality.save();
    }
    async findAll() {
        return this.nationalityModel.findAll();
    }
    findOne(id) {
        return this.nationalityModel.findOne({
            where: {
                id,
            },
        });
    }
    findOneByName(name) {
        return this.nationalityModel.findOne({
            where: {
                name,
            },
        });
    }
    async remove(id) {
        const nationality = await this.findOne(id);
        await nationality.destroy();
    }
};
NationalitiesService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(nationality_model_1.Nationality)),
    __metadata("design:paramtypes", [Object])
], NationalitiesService);
exports.NationalitiesService = NationalitiesService;
//# sourceMappingURL=nationalities.service.js.map