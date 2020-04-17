"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fib_1 = require("./fib");
var chai_1 = require("chai");
require("mocha");
describe("Fibonacci1", function () {
    it("should equal 0 for call with 0", function () {
        chai_1.expect(fib_1.fiboNaive(0)).to.equal(0);
    });
});
describe("Type return", function () {
    it("Function should return number", function () {
        chai_1.expect(fib_1.fibo(20)).to.be.a('number');
    });
});
//# sourceMappingURL=testy.js.map