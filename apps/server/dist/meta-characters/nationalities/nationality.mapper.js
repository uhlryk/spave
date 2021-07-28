"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalityMapper = void 0;
class NationalityMapper {
    static toResponse(nationality) {
        return {
            id: nationality.id,
            name: nationality.name,
        };
    }
}
exports.NationalityMapper = NationalityMapper;
//# sourceMappingURL=nationality.mapper.js.map