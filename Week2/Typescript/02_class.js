var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//super
var Base = /** @class */ (function () {
    function Base(y) {
        this.x = y;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived(y) {
        var _this = _super.call(this, y) || this;
        console.log(_this.x);
        return _this;
    }
    return Derived;
}(Base));
var myDerived = new Derived(34);
//Getters / Setters
var C = /** @class */ (function () {
    function C() {
        this._length = 0;
    }
    Object.defineProperty(C.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var Ball = /** @class */ (function () {
    function Ball() {
    }
    //   Class 'Ball' incorrectly implements interface 'Pingable'.
    //     Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    Ball.prototype.pong = function () {
        console.log("pong!");
    };
    return Ball;
}());
