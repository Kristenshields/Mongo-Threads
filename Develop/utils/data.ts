

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

const thoughtTags = [
    'coding',
    'cooking',
    'reading',
    'playing',
    'sleeping',
    'traveling',
    'eating',
    'dancing',
    'singing',
    'swimming',
    'watching movies',
    'playing games',
    'hiking',
    'biking',
    'running',
    'walking',
    'drawing',
    'painting',
    'taking photos',
    'writing',
    'meditating',
    'doing yoga',
    'playing sports',
    'playing music',
    'playing instruments',
    'watching sports',
    'watching TV',
    'watching shows',
    'watching plays',
    'watching concerts',
    'watching musicals',
    'watching operas',
    'watching ballets',
    'watching dance shows',
    'watching magic shows',
    'watching comedy shows',
    'watching drama shows',
    'watching action shows',
    'watching horror shows',
    'watching thriller shows',
    'watching mystery shows',
    'watching sci-fi shows',
];

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

const getRandomName = () => {
    return names[getRandomInt(names.length)];
};

const getRandomThoughts = (numThoughts: number) => {
    const thoughts = [];
    for (let i = 0; i < numThoughts; i++) {
        const thoughtText = thoughtDescriptions[getRandomInt(thoughtDescriptions.length)];
        const username = getRandomName();
        thoughts.push({ thoughtText, username });
    }
    return thoughts;
};

const getRandomTags = (numTags: number) => {
    const tags = [];
    for (let i = 0; i < numTags; i++) {
        tags.push(thoughtTags[getRandomInt(thoughtTags.length)]);
    }
    return tags;
}



export { getRandomTags, getRandomName, getRandomThoughts };