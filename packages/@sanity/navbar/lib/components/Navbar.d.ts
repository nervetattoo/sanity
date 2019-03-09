/// <reference types="react" />
import { Props as ItemProps } from './NavbarItem';
export interface Props {
    items: ItemProps[];
}
declare function Navbar({ items }: Props): JSX.Element;
export default Navbar;
