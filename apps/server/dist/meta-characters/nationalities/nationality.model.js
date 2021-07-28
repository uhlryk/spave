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
exports.Nationality = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const name_model_1 = require("../names/name.model");
let Nationality = class Nationality extends sequelize_typescript_1.Model {
    static createUUID(instance) {
        instance.id = uuid_1.v4();
    }
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Nationality.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Nationality.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => name_model_1.Name, 'nationalityId'),
    __metadata("design:type", Array)
], Nationality.prototype, "names", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Nationality]),
    __metadata("design:returntype", void 0)
], Nationality, "createUUID", null);
Nationality = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
    })
], Nationality);
exports.Nationality = Nationality;
//# sourceMappingURL=nationality.model.js.map