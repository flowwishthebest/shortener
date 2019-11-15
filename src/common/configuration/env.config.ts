import { IConfig } from "./config.interface";
import * as DotEnv from "dotenv";

DotEnv.config();

export class EnvConfig implements IConfig {
    public getProp<T>(propPath: string): T {
        return {} as any;
    }
}
