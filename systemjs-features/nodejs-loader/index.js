const url = require('url');
const { System, applyImportMap, setBaseUrl } = require('systemjs');

// Setting base URL is optional - the default is to use process.cwd()
// so the code here is redundant
const basePath = url.pathToFileURL(process.cwd()).href;
setBaseUrl(System, basePath);

applyImportMap(System, {
  imports: {
    "antarctica": "./antarctica.js"
  }
});

System.import('antarctica').then(ns => {
  console.log('antarctica module', ns);
});