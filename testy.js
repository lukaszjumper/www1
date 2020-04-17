"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fib_1 = require("./fib");
const chai_1 = require("chai");
require("mocha");
describe("Fibonacci1", () => {
    it("should equal 0 for call with 0", () => {
        chai_1.expect(fib_1.fiboNaive(0)).to.equal(0);
    });
});
describe("Type return", () => {
    it("Function should return number", () => {
        chai_1.expect(fib_1.fibo(20)).to.be.a('number');
    });
});
