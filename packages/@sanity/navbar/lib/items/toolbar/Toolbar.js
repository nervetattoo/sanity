"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const router_1 = require("part:@sanity/base/router");
const tools_1 = require("./tools");
const ToolbarItem_1 = require("./ToolbarItem");
const styles = require("./Toolbar.module.css");
function Toolbar({ minimized, router }) {
    return (React.createElement("ol", { className: minimized ? styles.minimized : styles.root }, tools_1.default.map(tool => (React.createElement("li", { key: tool.name },
        React.createElement(ToolbarItem_1.default, { icon: tool.icon, isActive: false, name: tool.name, routerState: router.state, showLabel: !minimized, title: tool.label }))))));
}
exports.default = router_1.withRouterHOC(Toolbar);

//# sourceMappingURL=Toolbar.js.map
