import { NationalitiesService } from '../nationalities/nationalities.service';
import { CreateNameDto } from './dto/create-name.dto';
import { Name } from './name.model';
export declare class NamesService {
    private readonly nameModel;
    private readonly nationalitiesService;
    constructor(nameModel: typeof Name, nationalitiesService: NationalitiesService);
    create(createNameDto: CreateNameDto): Promise<Name>;
    findAll(): Promise<Name[]>;
    findOne(id: string): Promise<Name>;
    remove(id: string): Promise<void>;
}
