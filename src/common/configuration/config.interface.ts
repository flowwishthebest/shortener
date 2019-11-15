export interface IConfig {
    getProp<T>(propPath: string): T;
}
