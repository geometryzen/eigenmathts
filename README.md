# eigenmathts

[![version](https://img.shields.io/npm/v/@geometryzen/eigenmathts.svg)](https://www.npmjs.com/package/@geometryzen/eigenmathts) 

[![npm downloads](https://img.shields.io/npm/dm/@geometryzen/eigenmathts.svg)](https://npm-stat.com/charts.html?package=@geometryzen/eigenmathts&from=2022-09-01)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

`eigenmathts` is a Javascript program for evaluating Eigenmath scripts in a browser.

Scripts are read from `document.getElementById("stdin").value`

Results are written to `document.getElementById("stdout").innerHTML`

For example (click [here](https://georgeweigt.github.io/demo.html) to try)

```
<html>
<body>

<script src="https://georgeweigt.github.io/eigenmath.js"></script>

<textarea id="stdin" rows="24" cols="80" style="font-family:courier;font-size:1em">
-- Eigenmath script goes here
f = sin(x) / x
f
yrange = (-1,1)
draw(f,x)
</textarea>

<button onclick="run()">Run</button><br>

<div id="stdout"></div>

</body>
</html>
```
