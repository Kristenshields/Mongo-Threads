const names = [
    'John',
    'Jane',
    'Joe',
    'Jill',
    'Jack',
    'Jenny',
    'Jim',
    'Jen',
    'Jesse',
];
const thoughtDescriptions = [
    'I love to code',
    'I love to cook',
    'I love to read',
    'I love to play',
    'I love to sleep',
    'I love to travel',
    'I love to eat',
    'I love to dance',
    'I love to sing',
    'I love to swim',
    'I love to watch movies',
    'I love to play games',
    'I love to hike',
    'I love to bike',
    'I love to run',
    'I love to walk',
    'I love to draw',
    'I love to paint',
    'I love to take photos',
    'I love to write',
    'I love to meditate',
    'I love to do yoga',
    'I love to play sports',
    'I love to play music',
    'I love to play instruments',
    'I love to watch sports',
    'I love to watch TV',
    'I love to watch shows',
    'I love to watch plays',
    'I love to watch concerts',
    'I love to watch musicals',
    'I love to watch operas',
    'I love to watch ballets',
    'I love to watch dance shows',
    'I love to watch magic shows',
    'I love to watch comedy shows',
    'I love to watch drama shows',
    'I love to watch action shows',
    'I love to watch horror shows',
    'I love to watch thriller shows',
    'I love to watch mystery shows',
    'I love to watch sci-fi shows',
];
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtDescriptions),
            published: Math.random() > 0.5,
        });
    }
    return results;
};
export { getRandomName, getRandomThoughts };
