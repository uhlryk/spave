import { NamesService } from './names.service';
import { CreateNameDto } from './dto/create-name.dto';
import { ReturnNameDto } from './dto/return-name.dto';
export declare class NamesController {
    private readonly namesService;
    constructor(namesService: NamesService);
    create(createNameDto: CreateNameDto): Promise<ReturnNameDto>;
    findAll(): Promise<ReturnNameDto[]>;
    findOne(id: string): Promise<ReturnNameDto>;
    remove(id: string): Promise<void>;
}
