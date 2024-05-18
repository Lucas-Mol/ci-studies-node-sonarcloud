import { multiply } from "../src/math/multiply";

test("multiply 10 * 10 to be equal 100", () => {
    expect(multiply(10, 10)).toBe(100);
})
