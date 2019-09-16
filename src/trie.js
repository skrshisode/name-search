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
        if (!currentNode) {
            return null;
        }
    }

    return currentNode;
}

// This function needs correction

Trie.prototype.getChildrenData = function(currentNode) {

    var results = [];
    if (currentNode.isEndOfWord) {
        results = results.concat(currentNode.data);
    }

    if (currentNode.hasChild(currentNode)) {
        var self = this;
        currentNode.children.forEach(function(value, key) {
            var newResults = self.getChildrenData(value);
            results = results.concat(newResults);
        })
    }
    return results;
}

module.exports = Trie;