"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameMapper = void 0;
class NameMapper {
    static toResponse(name) {
        return {
            id: name.id,
            name: name.name,
            gender: name.gender,
            type: name.type,
            nationalityId: name.nationalityId,
        };
    }
}
exports.NameMapper = NameMapper;
//# sourceMappingURL=name.mapper.js.map