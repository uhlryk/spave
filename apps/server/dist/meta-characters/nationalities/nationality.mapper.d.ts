import { NationalityDto } from './dto/nationality.dto';
import { Nationality } from './nationality.model';
export declare class NationalityMapper {
    static toResponse(nationality: Nationality): NationalityDto;
}
