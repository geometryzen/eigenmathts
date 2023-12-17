import { run } from "../src/index";

test("exported run symbol should be a function", function () {
    expect(typeof run).toBe("function");
});
