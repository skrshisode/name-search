var fs = require('fs');
var readline = require('readline');
var Trie = require('./trie');

function Store() {
    this.data = new Trie();
}

Store.prototype.insert = function(name) {
    var givenName = name['givenName'];
    var middleName = name['middleName'];
    var surname = name['surname'];

    this.data.addWord(givenName.toLowerCase(), name);
    this.data.addWord(middleName.toLowerCase(), name);
    this.data.addWord(surname.toLowerCase(), name);
}

Store.prototype.init = function(filePath) {
    var line_no = 0;
    var headers;

    var rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });


    var store = this;

    rl.on('line', function(line) {
        if (line_no === 0) {
            headers = line.split(',');
        } else {
            var data = line.split(',');
            if (data.length == headers.length) {

                var row = {};
                for (var i = 0; i < headers.length; i++) {
                    row[headers[i]] = data[i];
                }
                store.insert(row);
            }
        }

        line_no++;
    });

    // end
    rl.on('close', function(line) {
        console.log('Intialization Completed');
    });
};

Store.prototype.search = function(word) {
    var data = this.data.searchWord(word);
    return data;
}

module.exports = Store;