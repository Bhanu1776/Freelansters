const { node, npm } = require("./index.js");

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
