# Instant Search

Endpoint: `http://localhost:3000/api/search?q=[SEARCH_TERM]`

## Setup

- Keep data.csv file in project's root directory
- Run `npm install` in project's root directory for dependencies
- Run `npm start` to start the service

## Details

- Given project takes csv data and provides efficient endpoint for searching names
- Project has in-memory store built using Trie data structure
- Each csv row (i.e. person name) is tokenized and inserted into in-memory store
- Whenever word completes we append completed name in leaf node's data (as map e.g. `{givenName:"john",middleName:"f",surname:"kennedy"}`)
- To search project finds if the path exists for given query and then returns data combining from all the child nodes

## Note

Project is written in Node.js uses express.js for basic frontend.