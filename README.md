# eigenmathts

A port of eigenmath to TypeScript and EcmaScript modules

[![version](https://img.shields.io/npm/v/@geometryzen/eigenmathts.svg)](https://www.npmjs.com/package/@geometryzen/eigenmathts) 

[![npm downloads](https://img.shields.io/npm/dm/@geometryzen/eigenmathts.svg)](https://npm-stat.com/charts.html?package=@geometryzen/eigenmathts&from=2022-09-01)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

`eigenmathts` is a Javascript program for evaluating Eigenmath scripts in a browser.

Scripts are read from `document.getElementById("stdin").value`

Results are written to `document.getElementById("stdout").innerHTML`

For a STEMCstudio example (click [here](https://www.stemcstudio.com/gists/aa8013930a6319728967b566c38b1eb3) to try)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <base href="/">
    <title></title>
    <!-- link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css" /-->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <textarea id="stdin" rows="24" cols="80" style="font-family:courier;font-size:1em" spellcheck="false"></textarea>

    <button id="btn-run">Run</button><br>

    <div id="stdout"></div>
</body>

</html>
```

```typescript
import { run } from '@geometryzen/eigenmathts'

const stdin = document.getElementById("stdin") as HTMLTextAreaElement

stdin.value = [
    `f=sin(x)/x`,
    `f`,
    `yrange=(-1,1)`,
    `draw(f,x)`
].join('\n').trim()

const btnRun = document.getElementById("btn-run") as HTMLElement

btnRun.onclick = run

window.onunload = function() {
    // Write your application cleanup code here.
}

// Used to ensure that this file is treated as a module.
export { }
```
