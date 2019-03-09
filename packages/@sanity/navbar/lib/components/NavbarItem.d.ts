import * as React from 'react';
import { ItemLayoutConfig } from '../types';
export interface Props {
    component: React.ComponentFactory<any, any>;
    layout: ItemLayoutConfig;
    minimized: boolean;
    name: string;
    options: {
        [key: string]: any;
    };
    setElement: (element: HTMLDivElement | null) => void;
}
declare function NavbarItem(props: Props): JSX.Element;
export default NavbarItem;
