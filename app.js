/* Imports */
import { renderMonster } from './render-utils.js';
/* Get DOM Elements */
const monsterSection = document.getElementById('monster-section');
/* State */
let monsters = [
    {
        name: 'Spores',
        type: 'mushroom',
        hp: 6,
    },
    {
        name: 'Amumu',
        type: 'mummy',
        hp: 4,
    },
    {
        name: 'Boo',
        type: 'ghost',
        hp: 10,
    },
];

/* Events */

/* Display Functions */
function displayMonsters() {
    for (const monster of monsters) {
        const monsterEl = renderMonster(monster);
        monsterSection.append(monsterEl);
    }
}
displayMonsters();
// (don't forget to call any display functions you want to run on page load!)
