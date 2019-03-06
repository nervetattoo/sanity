"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles = require("./NavbarItem.module.css");
function renderNavbarItem(item, minimized, options) {
    if (typeof item === 'string') {
        return React.createElement("div", null,
            "(missing: ",
            item,
            ")");
    }
    const ItemComponent = item.component;
    return React.createElement(ItemComponent, { minimized: minimized, options: options });
}
function NavbarItem(props) {
    const { item, layout, name, options, setElement } = props;
    const style = {};
    if (layout.width === 'auto') {
        style.flex = '1';
    }
    return (React.createElement("div", { className: styles.root, style: style, ref: setElement }, renderNavbarItem(item || name, props.minimized, options)));
}
exports.default = NavbarItem;

//# sourceMappingURL=NavbarItem.js.map
