"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const React = require("react");
const Navbar_1 = require("../../components/Navbar");
const NavbarItem_1 = require("../../components/NavbarItem");
const config_1 = require("./config");
const items_1 = require("./items");
class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            console.log('resize', this.state, this.elements);
        };
        this.elements = config_1.default.items.map(() => null);
        this.state = {
            items: config_1.default.items.map(() => ({ isIntersecting: false }))
        };
        this.handleResize = lodash_1.throttle(this.handleResize, 1000);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    setElement(element, idx) {
        this.elements[idx] = element;
    }
    render() {
        return (React.createElement(Navbar_1.default, { config: config_1.default }, config_1.default.items.map((itemConfig, idx) => {
            const item = items_1.default.find(i => i.name === itemConfig.name) || null;
            const layout = Object.assign({}, (itemConfig.layout || {}), ((item && item.layout) || {}));
            const options = Object.assign({}, (itemConfig.options || {}), ((item && item.options) || {}));
            return (React.createElement(NavbarItem_1.default, { item: item, key: itemConfig.name, layout: layout, minimized: true, name: itemConfig.name, options: options, setElement: element => this.setElement(element, idx) }));
        })));
    }
}
exports.default = NavbarContainer;

//# sourceMappingURL=Navbar.js.map
