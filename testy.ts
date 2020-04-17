import { fiboNaive, fibo } from "./fib";
import { expect } from "chai";

import "mocha";

describe("Fibonacci1", () => {
    it("should equal 0 for call with 0", () => {
        expect(fiboNaive(0)).to.equal(0);
    });
});

describe("Type return", () => {
    it("Function should return number", () => {
        expect(fibo(20)).to.be.a('number');
    });
});
