function TrieNode(character, isEndOfWord, name) {
    this.character = character;
    this.isEndOfWord = isEndOfWord || false;
    this.children = new Map();
    this.data = [];

    if (isEndOfWord) {
        if (name) {
            this.data.push(name);
        } else {
            throw "Invalid Name";
        }
    }
}

TrieNode.prototype.getNode = function(character) {
    console.log(character);
    console.log("children- ",this.children);

    return this.children.get(character);
}

TrieNode.prototype.hasChild = function(currentNode) {
    console.log("children- ",currentNode.children);

    return 0 < currentNode.children.size;
}

TrieNode.prototype.addChild = function(character, isEndOfWord, data) {
    if (!this.children.get(character)) {
        this.children.set(character, new TrieNode(character, isEndOfWord, data));
    } else if (isEndOfWord) {
        var child = this.children.get(character);
        child.data.push(data);
        this.children.set(character, child);
    }
    return this.children.get(character);
}

module.exports = TrieNode;