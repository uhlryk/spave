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
exports.Name = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const nationality_model_1 = require("../nationalities/nationality.model");
const gender_enum_1 = require("./gender.enum");
const name_type_enum_1 = require("./name-type.enum");
let Name = class Name extends sequelize_typescript_1.Model {
    static createUUID(instance) {
        instance.id = uuid_1.v4();
    }
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Name.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Name.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Name.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Name.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => nationality_model_1.Nationality),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Name.prototype, "nationalityId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => nationality_model_1.Nationality),
    __metadata("design:type", nationality_model_1.Nationality)
], Name.prototype, "nationality", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Name]),
    __metadata("design:returntype", void 0)
], Name, "createUUID", null);
Name = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
    })
], Name);
exports.Name = Name;
//# sourceMappingURL=name.model.js.map