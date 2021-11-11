import { GatherContentCredentials, Item } from '../types';
export declare type GetItemParams = {
    include?: 'structure'[];
};
export declare const getItem: (itemId: number, params: GetItemParams, credentials: GatherContentCredentials) => Promise<Item>;
