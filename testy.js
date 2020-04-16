"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var chai_1 = require("chai");
require("mocha");
describe("Fibonacci", function () {
    it("should equal 0 for call with 0", function () {
        chai_1.expect(main_1.fiboNaive(0)).to.equal(0);
    });
});
//# sourceMappingURL=testy.js.map