function StringList(word) {
    let characters = {}
    for (let count of word) {
        if (characters[count]) {
            characters[count] += 1;
        } else {
            characters[count] = 1
        }
    }
        return characters;

}


    let name  = "Femi is going to scholl"
    console.log(StringList(name));
