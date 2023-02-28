function ucFirst(word) {
    return word.at(0).toUpperCase() + word.slice(1);
}


console.log(ucFirst("вася") == "Вася");