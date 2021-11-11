import { GatherContentCredentials, GatherContentItem } from '../../types';
export declare type GetItemParams = {
    include?: 'structure'[];
};
export declare const getItemContent: (itemId: number, params: GetItemParams, credentials: GatherContentCredentials) => Promise<GatherContentItem>;
