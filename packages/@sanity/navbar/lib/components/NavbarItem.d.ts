/// <reference types="react" />
import { Item, ItemLayoutConfig } from '../types';
interface Props {
    item: Item | null;
    layout: ItemLayoutConfig;
    minimized?: boolean;
    name: string;
    options: {
        [key: string]: any;
    };
    setElement?: (element: HTMLDivElement | null) => void;
}
declare function NavbarItem(props: Props): JSX.Element;
export default NavbarItem;
