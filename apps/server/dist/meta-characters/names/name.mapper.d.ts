import { ReturnNameDto } from './dto/return-name.dto';
import { Name } from './name.model';
export declare class NameMapper {
    static toResponse(name: Name): ReturnNameDto;
}
