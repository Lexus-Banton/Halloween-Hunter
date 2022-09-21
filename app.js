/* Imports */
import { renderMonster } from './render-utils.js';
/* Get DOM Elements */
const monsterSection = document.getElementById('monster-section');
const deadMonsters = document.getElementById('dead-monsters');
const damageDone = document.getElementById('damage-done');
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

function displayDamage() {
    damageDone.textContent = `You hit ${monsters.name} and  ${0} damage`;
}
function displayDead() {
    deadMonsters.textContent = `You have Killed ${0} monsters`;
}
displayMonsters();
displayDamage();
displayDead();

// (don't forget to call any display functions you want to run on page load!)
//test
