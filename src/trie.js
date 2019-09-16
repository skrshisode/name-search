var TrieNode = require('./trie-node');

function Trie() {
    this.head = new TrieNode("*");
}

Trie.prototype.addWord = function(word, data) {
    var characters = Array.from(word);
    var currentNode = this.head;
    for (var i = 0; i < characters.length; i++) {
        if (i === characters.length - 1) {
            currentNode = currentNode.addChild(characters[i], true, data);
        } else {
            currentNode = currentNode.addChild(characters[i]);
        }
    }
    return this;
}

Trie.prototype.searchWord = function(word) {
    console.log("Searching...", word)
    var lastCharacterNode = this.getLastCharacterNode(word);

    if (!!lastCharacterNode) {
        return this.getChildrenData(lastCharacterNode);
    } else {
        return [];
    }

}

Trie.prototype.getLastCharacterNode = function(word) {
    var characters = Array.from(word);
    var currentNode = this.head;

    for (var i = 0; i < characters.length; i++) {
        currentNode = currentNode.getNode(characters[i]);
        console.log(characters[i], currentNode);

        if (!currentNode) {
            return null;
        }
    }

    return currentNode;
}

// This function needs correction

Trie.prototype.getChildrenData = function(currentNode) {

    var results = [];

    //console.log("=============>", currentNode.character, currentNode.isEndOfWord, currentNode.data, !!currentNode.hasChild(currentNode));

    if (currentNode.isEndOfWord) {
        results = results.concat(currentNode.data);
        //console.log("-----1---->",results)
    }

    if (currentNode.hasChild(currentNode)) {
        var self = this;
        currentNode.children.forEach(function(value, key){
            console.log("char- ", key)
            var newResults = self.getChildrenData(value);
            results = results.concat(newResults);
        })
    }
    //console.log("-----2---->", results);
    return results;
}

module.exports = Trie;