# oboe-memory-bug

Trying to reproduce the bug outlined in https://github.com/jimhigson/oboe.js/issues/68. 

## Getting started

- `$ git clone https://github.com/JuanCaicedo/oboe-memory-bug.git`
- `$ cd oboe-memory-bug`
- `$ npm install`
- `$ npm start`

## Two conditions
1. If you go to [http://localhost:3000/home](http://localhost:3000/home), your browser might crash. Chrome displays an "Aw, snap!" error.

2. If you go to [http://localhost:3000/home?drop=true](http://localhost:3000/home?drop=true), then the code makes use of `oboe.drop`, and it should successfully parse the whole response.
