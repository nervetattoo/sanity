"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("part:@sanity/base/user");
const react_props_stream_1 = require("react-props-stream");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const [menuVisibleNext$, setMenuVisible] = react_props_stream_1.createEventHandler();
const menuVisibleInitial$ = rxjs_1.of(false);
const menuVisible$ = rxjs_1.merge(menuVisibleInitial$, menuVisibleNext$);
const user$ = user_1.default.currentUser.pipe(operators_1.map((snapshot) => snapshot.user));
function toPropsStream(props$) {
    const onMenuItemClick = (item) => {
        switch (item.action) {
            case 'signOut':
                user_1.default.actions.logout();
                break;
            default:
                console.warn(`Unknown action: ${item.action}`);
                break;
        }
    };
    return rxjs_1.combineLatest(props$, user$, menuVisible$).pipe(operators_1.map(([_, user, menuVisible]) => ({
        menuVisible,
        onHideMenu: () => setMenuVisible(false),
        onMenuItemClick,
        onShowMenu: () => setMenuVisible(true),
        user
    })));
}
exports.toPropsStream = toPropsStream;

//# sourceMappingURL=props.js.map
