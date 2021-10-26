const release = require("release-it");

release(options).then((output) => {
  console.log(output);
  // { version, latestVersion, name, changelog }
});
