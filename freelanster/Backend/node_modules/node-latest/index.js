const https = require("https");
const child_process = require("child_process");

/* --- NODE --- */

const NODE_DIST_INDEX = "https://nodejs.org/dist/index.json";

async function node_latest() {
  let json = await fetch_json(NODE_DIST_INDEX);
  return strip_v(json[0].version);
}

async function node_lts() {
  let json = await fetch_json(NODE_DIST_INDEX);
  return strip_v(json.find((v) => v.lts !== false).version);
}

module.exports.node = {
  current: strip_v(process.version),
  latest: node_latest,
  lts: node_lts,
};

/* --- NPM --- */

function npm_current() {
  return new Promise((resolve, reject) => {
    child_process.exec("npm --version", (err, version) => {
      if (err) reject(err);
      else resolve(version.trimRight());
    })
  });
}

function npm_fetch_tag(tag) {
  return async function () {
    let json = await fetch_json("https://registry.npmjs.com/npm", { accept: "application/vnd.npm.install-v1+json" });
    /**@type {string}*/ let v = json["dist-tags"][tag];
    return v;
  };
}

module.exports.npm = {
  current: npm_current,
  latest: npm_fetch_tag("latest"),
  lts: npm_fetch_tag("lts"),
  next: npm_fetch_tag("next"),
};

/* --- UTILS --- */

function strip_v(/**@type {string}*/ s) {
  return s.slice(1);
}

function fetch_json(url, headers = {}) {
  return new Promise((resolve, reject) => {
    let req = https.get(url, { headers }, async (res) => {
      try {
        res.once("error", reject);
        let buf = [];
        for await (let chunk of res) buf.push(chunk);
        resolve(JSON.parse(Buffer.concat(buf).toString("utf-8")));
      } catch (err) {
        reject(err);
      }
    });
    req.once("error", reject);
  });
}
