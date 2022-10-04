export function getRandomNumber(array) {
    return Math.floor(Math.random() * array);
}
export function getRandomItem(array) {
    const number = getRandomNumber(array.length);
    const item = array[number];
    return item;
}
