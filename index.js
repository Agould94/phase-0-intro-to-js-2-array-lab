// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
};

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    const newcats = cats.slice(0, cats.length - 1);
    return newcats;
}

function removeFirstCat(){
    const newcats = cats.slice(-2, cats.length);
    return newcats;
}
