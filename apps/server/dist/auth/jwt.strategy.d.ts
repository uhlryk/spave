import { PayloadDto } from './dto/payload.dto';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: PayloadDto): Promise<{
        name: string;
        id: string;
    }>;
}
export {};
