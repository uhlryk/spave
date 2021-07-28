import { Model } from 'sequelize-typescript';
import { Name } from '../names/name.model';
export declare class Nationality extends Model<Nationality> {
    id: string;
    name: string;
    names: Name[];
    static createUUID(instance: Nationality): void;
}
