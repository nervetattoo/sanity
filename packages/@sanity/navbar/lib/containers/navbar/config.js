"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("part:@sanity/navbar/config");
const config_2 = require("../../parts/config");
let config;
if (config_1.default === config_2.default) {
    config = config_2.default;
}
else {
    config = Object.assign({}, config_2.default, config_1.default);
}
exports.default = config;

//# sourceMappingURL=config.js.map
