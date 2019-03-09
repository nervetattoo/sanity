"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const package_icon_1 = require("part:@sanity/base/package-icon");
const SanityStatusDialog_1 = require("./SanityStatusDialog");
const styles = require("./SanityStatus.module.css");
function formatUpdateLabel(len) {
    if (len === 1)
        return ' 1 update';
    return `${len} updates`;
}
function SanityStatus(props) {
    const { dialogOpen, onDialogClose, onDialogOpen, severity, versions, versionsStatus } = props;
    if (!versionsStatus || versionsStatus.isUpToDate) {
        // Do not show if there's nothing to update
        return null;
    }
    const { isUpToDate } = versionsStatus;
    const outdated = versionsStatus.outdated || [];
    return (React.createElement("div", { className: styles[severity || 'root'] },
        dialogOpen && (React.createElement(SanityStatusDialog_1.default, { severity: severity, outdated: outdated, onClose: onDialogClose, versions: versions })),
        React.createElement("button", { className: styles.button, onClick: onDialogOpen, type: "button" },
            React.createElement("div", { className: styles.buttonInner, tabIndex: -1 }, isUpToDate ? (React.createElement("span", null, "Up to date")) : (React.createElement("span", null,
                React.createElement(package_icon_1.default, null),
                " ",
                formatUpdateLabel(outdated.length)))))));
}
exports.default = SanityStatus;

//# sourceMappingURL=SanityStatus.js.map
