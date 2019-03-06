import { ItemLayoutConfig, ItemOptions } from './config';
export interface Item {
    name: string;
    component: any;
    layout?: ItemLayoutConfig;
    options?: ItemOptions;
}
