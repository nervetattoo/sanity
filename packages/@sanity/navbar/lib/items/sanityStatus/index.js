"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_props_stream_1 = require("react-props-stream");
const SanityStatus_1 = require("./SanityStatus");
const props_1 = require("./props");
const SanityStatusContainer = react_props_stream_1.withPropsStream(props_1.props$, SanityStatus_1.default);
exports.default = {
    name: 'sanityStatus',
    component: SanityStatusContainer
};

//# sourceMappingURL=index.js.map
