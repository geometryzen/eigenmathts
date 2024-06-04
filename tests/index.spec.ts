import { executeScript, run } from "../src/index";

test("exported run symbol should be a function", function () {
    const x = typeof run;
    expect(x).toBe("function");
});

test("exported executeScript symbol should be a function", function () {
    const x = typeof executeScript;
    expect(x).toBe("function");
});

test("x=0", function () {
    const lines = [`x=0`, `x`];
    const scriptText = lines.join("\n");
    const outputs = executeScript(scriptText);
    expect(outputs.length).toBe(1);
});
