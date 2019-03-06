"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_props_stream_1 = require("react-props-stream");
const UserStatus_1 = require("./UserStatus");
const props_1 = require("./props");
const UserStatusContainer = react_props_stream_1.withPropsStream(props_1.toPropsStream, UserStatus_1.default);
exports.default = {
    name: 'userStatus',
    component: UserStatusContainer
};

//# sourceMappingURL=index.js.map
