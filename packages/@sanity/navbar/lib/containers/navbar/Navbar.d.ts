import * as React from 'react';
interface ItemState {
    isIntersecting: boolean;
}
interface State {
    items: ItemState[];
}
declare class NavbarContainer extends React.Component<{}, State> {
    elements: Array<HTMLDivElement | null>;
    constructor(props: {});
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    setElement(element: HTMLDivElement | null, idx: number): void;
    render(): JSX.Element;
}
export default NavbarContainer;
