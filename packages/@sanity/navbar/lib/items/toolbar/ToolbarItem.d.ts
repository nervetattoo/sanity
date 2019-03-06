import * as React from 'react';
interface Props {
    icon?: React.ComponentFactory<any, any>;
    isActive: boolean;
    name: string;
    routerState: any;
    showLabel: boolean;
    title: string;
}
declare function ToolbarItem({ icon, isActive, name, routerState, showLabel, title }: Props): JSX.Element;
export default ToolbarItem;
