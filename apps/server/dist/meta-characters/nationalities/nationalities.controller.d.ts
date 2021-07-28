import { NationalitiesService } from './nationalities.service';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { NationalityDto } from './dto/nationality.dto';
export declare class NationalitiesController {
    private readonly nationalitiesService;
    constructor(nationalitiesService: NationalitiesService);
    create(createNationalityDto: CreateNationalityDto): Promise<NationalityDto>;
    findAll(): Promise<NationalityDto[]>;
    findOne(id: string): Promise<NationalityDto>;
    remove(id: string): Promise<void>;
}
