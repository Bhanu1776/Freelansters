
# node-latest

**Determine the lastest Node or npm version.**

## Installation

`npm i -S node-latest`

## Example Usage

```javascript
const { node, npm } = require("node-latest");

async function example() {
  console.log("node.current:", node.current);
  console.log("node.latest: ", await node.latest());
  console.log("node.lts:    ", await node.lts());
  console.log("npm.current: ", await npm.current());
  console.log("npm.latest:  ", await npm.latest());
  console.log("npm.next:    ", await npm.next());
  console.log("npm.lts:     ", await npm.lts());
}

example();

/*
node.current: 14.5.0
node.latest:  14.10.1
node.lts:     12.18.3
npm.current:  6.14.5
npm.latest:   6.14.8
npm.next:     6.14.8
npm.lts:      6.14.8
*/
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.
