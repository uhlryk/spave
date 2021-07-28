import { CreateNationalityDto } from './dto/create-nationality.dto';
import { Nationality } from './nationality.model';
export declare class NationalitiesService {
    private readonly nationalityModel;
    constructor(nationalityModel: typeof Nationality);
    create(createNationalityDto: CreateNationalityDto): Promise<Nationality>;
    findAll(): Promise<Nationality[]>;
    findOne(id: string): Promise<Nationality>;
    findOneByName(name: string): Promise<Nationality>;
    remove(id: string): Promise<void>;
}
