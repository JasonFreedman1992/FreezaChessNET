"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
const App = () => React.createElement("div", null, "Hello, hot reloading");
const HotApp = react_hot_loader_1.hot(module)(App);
ReactDOM.render(React.createElement(HotApp, null), document.getElementById('root'));
//# sourceMappingURL=App.js.map