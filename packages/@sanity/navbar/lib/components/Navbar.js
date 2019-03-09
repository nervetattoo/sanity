"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const NavbarItem_1 = require("./NavbarItem");
const styles = require("./Navbar.module.css");
function Navbar({ items }) {
    return (React.createElement("div", { className: styles.root },
        React.createElement("div", { className: styles.inner }, items.map(item => (React.createElement(NavbarItem_1.default, Object.assign({ key: item.name }, item)))))));
}
exports.default = Navbar;

//# sourceMappingURL=Navbar.js.map
