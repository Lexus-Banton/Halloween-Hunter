/* Imports */
import { renderMonster } from './render-utils.js';
import { getRandomItem, getRandomNumber } from './utils.js';
/* Get DOM Elements */
const monsterSection = document.getElementById('monster-section');
const deadMonsters = document.getElementById('dead-monsters');
const damageDone = document.getElementById('damage-done');
const witchImage = document.getElementById('witch-image');
const witchHp = document.getElementById('witch-hp');
/* State */
let witch = {
    hp: 20,
    type: 'witch',
};
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
        name: 'Casper',
        type: 'ghost',
        hp: 10,
    },
];

//monsters

const mushroom = {
    type: 'mushroom',
    hp: 6,
};

const oni = {
    type: 'oni',
    hp: 5,
};

const frank = {
    type: 'frank',
    hp: 10,
};

const mummy = {
    type: 'mummy',
    hp: 4,
};

const ghost = {
    type: 'ghost',
    hp: 10,
};

const witchAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const monsterAttacks = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];
const monsterTypes = [
    mushroom,
    mushroom,
    mushroom,
    mummy,
    mummy,
    mummy,
    ghost,
    ghost,
    oni,
    oni,
    oni,
    frank,
];

/* Events */

/* Display Functions */
function displayWitch() {
    //if witch has no more hp then they die
    witchHp.textContent = Math.max(0, witch.hp);
    if (witch.hp < 1) {
        witchImage.src = 'assets/witch-dead.png';
    } else {
        witchImage.src = `assets/${witch.type}.png`;
    }
}

function displayMonsters() {
    for (const monster of monsters) {
        const monsterEl = renderMonster(monster);
        monsterSection.append(monsterEl);

        monsterEl.addEventListener('click', () => {
            console.log('click', witch.hp, monster.hp);
            const witchAttack = getRandomItem(witchAttacks);
            const monsterAttack = getRandomItem(monsterAttacks);
            witch.hp = Math.max(0, witch.hp - monsterAttack);
            monster.hp = Math.max(0, monster.hp - witchAttack);
            console.log('click', witch.hp, monster.hp);

            damageDone.textContent = `You hit ${monster.name} and dealt ${witchAttack} damage`;
            displayWitch();
            displayMonsters();
        });
    }
}

function displayDead() {
    deadMonsters.textContent = `You have Killed ${0} monsters`;
}
displayMonsters();

displayDead();
displayWitch();

// (don't forget to call any display functions you want to run on page load!)
//test
