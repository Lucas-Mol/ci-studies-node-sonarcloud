import { sum } from "../src/math/sum";

test("add 10 + 10 to be equal 20", () => {
    expect(sum(10, 10)).toBe(20);
})
