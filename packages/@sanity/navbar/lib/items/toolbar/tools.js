"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tool = _interopRequireDefault(require("all:part:@sanity/base/tool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tools = _tool.default.map(toolConfig => {
  // console.log(toolConfig)
  return {
    name: toolConfig.name,
    label: toolConfig.title,
    icon: toolConfig.icon
  };
});

var _default = tools;
exports.default = _default;