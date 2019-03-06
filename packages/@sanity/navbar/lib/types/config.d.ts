export interface ItemLayoutConfig {
    align?: 'auto';
    width?: 'auto';
}
export interface ItemOptions {
    [key: string]: any;
}
export interface ItemConfig {
    name: string;
    layout?: ItemLayoutConfig;
    options?: ItemOptions;
}
export interface Config {
    items: ItemConfig[];
}
