import { GetItemParams } from '../api/items/getItemContent';
import { GatherContentCredentials } from '../types';
declare type FetchParams = GetItemParams | {};
interface IGatherContentResponse<T> {
    data: T;
}
export declare const gcFetch: <T>(uri: string, params: FetchParams, credentials: GatherContentCredentials) => Promise<IGatherContentResponse<T>>;
export {};
