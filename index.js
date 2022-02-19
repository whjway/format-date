if (process.env.NODE_ENV === "production") {
  module.export = require("./dist/formate-date.js");
} else {
  module.export = require("./dist/formate-date.min.js");
}
