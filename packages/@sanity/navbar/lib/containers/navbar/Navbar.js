"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Navbar_1 = require("../../components/Navbar");
const config_1 = require("./config");
const items_1 = require("./items");
const state_1 = require("./state");
function NavbarContainer() {
    const items = config_1.default.items.map((itemConfig, idx) => {
        const itemPart = items_1.default.find(i => i.name === itemConfig.name) || null;
        if (!itemPart) {
            return {
                component: () => (React.createElement("div", null,
                    "[unknown:",
                    itemConfig.name,
                    "]")),
                layout: {},
                minimized: false,
                options: {},
                setElement: (element) => state_1.setElement(element, idx)
            };
        }
        const layout = Object.assign({}, (itemConfig.layout || {}), ((itemPart && itemPart.layout) || {}));
        const options = Object.assign({}, (itemConfig.options || {}), ((itemPart && itemPart.options) || {}));
        const item = {
            component: itemPart.component,
            layout,
            minimized: false,
            options,
            setElement: element => state_1.setElement(element, idx)
        };
        return item;
    });
    return React.createElement(Navbar_1.default, { items: items });
}
exports.default = NavbarContainer;

//# sourceMappingURL=Navbar.js.map
