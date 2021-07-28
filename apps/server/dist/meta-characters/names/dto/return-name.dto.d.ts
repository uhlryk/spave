import { Gender } from '../gender.enum';
import { NameType } from '../name-type.enum';
export declare class ReturnNameDto {
    id: string;
    name: string;
    type: NameType;
    gender: Gender;
    nationalityId: string;
}
