import { run } from "../src/index";

test("exported run symbol should be a function", function () {
    const x = typeof run;
    expect(x).toBe("function");
});
