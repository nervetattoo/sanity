"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sign_out_icon_1 = require("part:@sanity/base/sign-out-icon");
const default_1 = require("part:@sanity/components/menus/default");
const styles = require("./UserStatus.module.css");
function UserStatus({ menuVisible, onHideMenu, onMenuItemClick, onShowMenu, user }) {
    return (React.createElement("div", { className: styles.root },
        React.createElement("button", { className: styles.button, onClick: onShowMenu, title: "Show user menu", type: "button" },
            React.createElement("div", { className: styles.inner, tabIndex: -1 }, user.profileImage ? (React.createElement("img", { src: user.profileImage, className: styles.userImage, alt: `${user.name}'s profile image` })) : (React.createElement("div", { className: styles.userImageMissing }, user.name ? user.name.charAt(0) : user.email.charAt(0))))),
        React.createElement("div", { className: styles.userName }, user.name),
        menuVisible && (React.createElement("div", { className: styles.userMenu },
            React.createElement(default_1.default, { onAction: onMenuItemClick, items: [
                    {
                        title: `Log out ${user.name}`,
                        icon: sign_out_icon_1.default,
                        action: 'signOut'
                    }
                ], origin: "top-right", onClickOutside: onHideMenu })))));
}
exports.default = UserStatus;

//# sourceMappingURL=UserStatus.js.map
