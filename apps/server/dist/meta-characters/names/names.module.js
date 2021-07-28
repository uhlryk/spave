"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const nationalities_module_1 = require("../nationalities/nationalities.module");
const name_model_1 = require("./name.model");
const names_controller_1 = require("./names.controller");
const names_service_1 = require("./names.service");
let NamesModule = class NamesModule {
};
NamesModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([name_model_1.Name]), nationalities_module_1.NationalitiesModule],
        exports: [sequelize_1.SequelizeModule, names_service_1.NamesService],
        controllers: [names_controller_1.NamesController],
        providers: [names_service_1.NamesService],
    })
], NamesModule);
exports.NamesModule = NamesModule;
//# sourceMappingURL=names.module.js.map