import { Model } from 'sequelize-typescript';
import { Nationality } from '../nationalities/nationality.model';
import { Gender } from './gender.enum';
import { NameType } from './name-type.enum';
export declare class Name extends Model<Name> {
    id: string;
    name: string;
    type: NameType;
    gender: Gender;
    nationalityId: string;
    nationality: Nationality;
    static createUUID(instance: Name): void;
}
