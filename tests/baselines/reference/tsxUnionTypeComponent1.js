//// [file.tsx]

import React = require('react');

interface ComponentProps {
    AnyComponent: React.StatelessComponent<any> | React.ComponentClass<any>;
}

class MyComponent extends React.Component<ComponentProps, {}> {
    render() {
        const { AnyComponent } = this.props;
        return (<AnyComponent />);
    }
}

// Stateless Component As Props
<MyComponent AnyComponent={() => <button>test</button>}/>

// Component Class as Props
class MyButtonComponent extends React.Component<{},{}> {
}

<MyComponent AnyComponent={MyButtonComponent} />



//// [file.js]
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        _super.apply(this, arguments);
    }
    MyComponent.prototype.render = function () {
        var AnyComponent = this.props.AnyComponent;
        return (React.createElement(AnyComponent, null));
    };
    return MyComponent;
}(React.Component));
// Stateless Component As Props
React.createElement(MyComponent, {AnyComponent: function () { return React.createElement("button", null, "test"); }});
// Component Class as Props
var MyButtonComponent = (function (_super) {
    __extends(MyButtonComponent, _super);
    function MyButtonComponent() {
        _super.apply(this, arguments);
    }
    return MyButtonComponent;
}(React.Component));
React.createElement(MyComponent, {AnyComponent: MyButtonComponent});