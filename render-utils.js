export function renderMonster(monster) {
    const containerEl = document.createElement('div');

    const hpEl = document.createElement('p');
    hpEl.textContent = monster.hp;

    const nameEl = document.createElement('p');
    nameEl.textContent = monster.name;

    const imageEl = document.createElement('img');
    imageEl.src = `assets/${monster.type}.png`;
    imageEl.classList.add('spooky');

    containerEl.append(hpEl, nameEl, imageEl);
    return containerEl;
}
