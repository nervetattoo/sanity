"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_props_stream_1 = require("react-props-stream");
const Navbar_1 = require("../../components/Navbar");
const state_1 = require("./state");
exports.NavbarContainer = react_props_stream_1.withPropsStream(state_1.state$, Navbar_1.default);

//# sourceMappingURL=index.js.map
