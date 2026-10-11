// SPDX-License-Identifier: GPL-3.0-or-later
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const catalog=JSON.parse(fs.readFileSync(path.join(root,'docs/operator-catalog.json'),'utf8'));
const categories={};
for(const op of catalog.operators)(categories[op.id.split('.')[0]] ||= []).push(op);
let text='# Registered operator reference\n\n';
text+=`Generated from Blender ${catalog.blender}: **${catalog.operator_count} operators**, **${catalog.type_count} RNA types**, **${Object.keys(categories).length} operator categories**.\n\n`;
text+='This index covers every registered operator in the tested runtime. It records native descriptions; it is not a claim that every operator has been executed. Full parameter types, defaults, ranges and enumerations are in [operator-catalog.json](operator-catalog.json). Query `catalog` for live signatures and `type` for RNA properties/functions.\n\n';
text+='| Category | Operators |\n|---|---:|\n';
for(const [category,ops] of Object.entries(categories))text+=`| [${category}](#${category}) | ${ops.length} |\n`;
for(const [category,ops] of Object.entries(categories)){
 text+=`\n## ${category}\n\n| Operator | Description |\n|---|---|\n`;
 for(const op of ops)text+=`| \`${op.id}\` | ${(op.description||op.name).replaceAll('|','\\|').replaceAll('\n',' ')} |\n`;
}
fs.writeFileSync(path.join(root,'docs/OPERATORS.md'),text);
console.log(JSON.stringify({operators:catalog.operator_count,types:catalog.type_count,categories:Object.keys(categories).length}));
