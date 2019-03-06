"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_icon_1 = require("part:@sanity/base/plugin-icon");
const router_1 = require("part:@sanity/base/router");
const React = require("react");
const react_tippy_1 = require("react-tippy");
const styles = require("./ToolbarItem.module.css");
function renderIcon(Icon) {
    if (typeof Icon !== 'function') {
        return React.createElement(plugin_icon_1.default, null);
    }
    return React.createElement(Icon, null);
}
function ToolbarItem({ icon, isActive, name, routerState, showLabel, title }) {
    const className = `${isActive ? styles.active : styles.root}`;
    const linkState = Object.assign({}, routerState, { tool: name, [name]: undefined });
    return (React.createElement(router_1.StateLink, { className: className, state: linkState },
        React.createElement(react_tippy_1.Tooltip, { arrow: true, className: styles.tooltip, disabled: showLabel, distance: 38, inertia: true, sticky: true, size: "small", theme: "dark", touchHold: true, title: title },
            React.createElement("div", { className: styles.inner, tabIndex: -1 },
                React.createElement("span", { className: styles.iconWrapper }, renderIcon(icon)),
                showLabel && React.createElement("span", { className: styles.labelWrapper }, title)))));
}
exports.default = ToolbarItem;

//# sourceMappingURL=ToolbarItem.js.map
