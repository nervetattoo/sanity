"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_1 = require("part:@sanity/components/dialogs/default");
const styles = require("./SanityStatusDialog.module.css");
function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function SanityStatusDialog(props) {
    const { onClose, outdated, severity } = props;
    const title = severity !== 'low' ? 'The Studio is outdated' : `${outdated.length} updates available`;
    return (React.createElement(default_1.default, { isOpen: true, onClose: onClose, onClickOutside: onClose, title: title },
        React.createElement("div", { className: styles.content },
            React.createElement("table", { className: styles.versionsTable },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Module name"),
                        React.createElement("th", null, "Current"),
                        React.createElement("th", null, "Latest"),
                        React.createElement("th", null, "Severity"))),
                React.createElement("tbody", null, outdated.map(pkg => (React.createElement("tr", { key: pkg.name },
                    React.createElement("td", null, pkg.name),
                    React.createElement("td", null, pkg.version),
                    React.createElement("td", null, pkg.latest),
                    React.createElement("td", null, ucfirst(pkg.severity || 'low')))))))),
        React.createElement("pre", { className: styles.syntax },
            React.createElement("span", { className: styles.commentSyntax }, `# First update Sanity CLI`),
            `\nnpm install @sanity/cli -g\n\n`,
            React.createElement("span", { className: styles.commentSyntax }, `# Then upgrade Sanity Studio`),
            `\nsanity upgrade`)));
}
exports.default = SanityStatusDialog;

//# sourceMappingURL=SanityStatusDialog.js.map
