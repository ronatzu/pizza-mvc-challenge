import * as fs from "node:fs";
import * as path from "node:path";

export const PizzaSeed= ()=>{
    const Jsonpath=path.join(process.cwd(),'src/seed/example-pizzas.json');
    return JSON.parse(fs.readFileSync(Jsonpath).toString());
}