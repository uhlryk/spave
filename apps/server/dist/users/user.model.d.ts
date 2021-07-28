import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    id: string;
    name: string;
    password: string;
    static createUUID(instance: User): void;
}
