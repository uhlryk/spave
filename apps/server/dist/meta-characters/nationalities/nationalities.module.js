"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalitiesModule = void 0;
const nationalities_controller_1 = require("./nationalities.controller");
const common_1 = require("@nestjs/common");
const nationality_model_1 = require("./nationality.model");
const sequelize_1 = require("@nestjs/sequelize");
const nationalities_service_1 = require("./nationalities.service");
let NationalitiesModule = class NationalitiesModule {
};
NationalitiesModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([nationality_model_1.Nationality])],
        exports: [sequelize_1.SequelizeModule, nationalities_service_1.NationalitiesService],
        controllers: [nationalities_controller_1.NationalitiesController],
        providers: [nationalities_service_1.NationalitiesService],
    })
], NationalitiesModule);
exports.NationalitiesModule = NationalitiesModule;
//# sourceMappingURL=nationalities.module.js.map