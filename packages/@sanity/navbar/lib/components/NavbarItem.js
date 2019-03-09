"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles = require("./NavbarItem.module.css");
function NavbarItem(props) {
    const { layout, minimized, options, setElement } = props;
    const ItemComponent = props.component;
    const style = {};
    if (layout.width === 'auto') {
        style.flex = '1';
    }
    return (React.createElement("div", { className: styles.root, style: style, ref: setElement },
        React.createElement(ItemComponent, { minimized: minimized, options: options })));
}
exports.default = NavbarItem;

//# sourceMappingURL=NavbarItem.js.map
