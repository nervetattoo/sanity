"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_1 = require("part:@sanity/components/dialogs/default");
const styles = require("./SanityStatusDialog.module.css");
function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function SanityStatusDialog(props) {
    const { onClose, outdated } = props;
    return (React.createElement(default_1.default, { isOpen: true, onClose: onClose, onClickOutside: onClose },
        React.createElement("div", { className: styles.content },
            React.createElement("table", { className: styles.versionsTable },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Module name"),
                        React.createElement("th", null, "Installed"),
                        React.createElement("th", null, "Wanted"),
                        React.createElement("th", null, "Importance"))),
                React.createElement("tbody", null, outdated.map(pkg => (React.createElement("tr", { key: pkg.name },
                    React.createElement("td", null, pkg.name),
                    React.createElement("td", null, pkg.version),
                    React.createElement("td", null, pkg.latest),
                    React.createElement("td", null, ucfirst(pkg.severity || 'low'))))))))));
}
exports.default = SanityStatusDialog;
//# sourceMappingURL=SanityStatusDialog.js.map