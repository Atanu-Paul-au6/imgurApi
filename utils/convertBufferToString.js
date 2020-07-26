const DataUri = require("datauri/parser");
const path = require("path");

const dataURIChild = new DataUri();

module.exports = function(originalName, buffer) {
  let extension = path.extname(originalName);
  return dataURIChild.format(extension, buffer).content;
};