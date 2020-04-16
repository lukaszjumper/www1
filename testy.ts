import { fiboNaive } from "./main";
import { expect } from "chai";

import "mocha";

describe("Fibonacci", () => {
    it("should equal 0 for call with 0", () => {
        expect(fiboNaive(0)).to.equal(0);
    });
});