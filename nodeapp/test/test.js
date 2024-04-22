var request = require("supertest");
var app = require("../index.js");
describe("GET /status", function () {
  it("respond with hello world", function (done) {
    request(app).get("/status").expect('{ "response": "Hello World" }', done);
  });
});
