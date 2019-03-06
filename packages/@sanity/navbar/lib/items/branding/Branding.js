"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_sanity_1 = require("config:sanity");
const logo = require("part:@sanity/base/brand-logo?");
const React = require("react");
const styles = require("./Branding.module.css");
function Branding() {
    const projectName = (config_sanity_1.project && config_sanity_1.project.name) || React.createElement(React.Fragment, null, "Untitled Studio");
    const Logo = logo ? logo.default : logo;
    return (React.createElement("a", { className: styles.root, href: "/" },
        Logo && (React.createElement("div", { className: styles.logoWrapper },
            React.createElement(Logo, null))),
        !Logo && React.createElement("div", { className: styles.projectNameWrapper }, projectName)));
}
exports.default = Branding;

//# sourceMappingURL=Branding.js.map
