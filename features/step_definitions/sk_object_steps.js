const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const SK = require('../../src/SKUtils.js');

Given('you provide a JSON Object', function() {
  this.hasEmptySource = { a: 1, b: null, c:2, d: "", f: undefined };
  this.paramSource = { name: "Jeff", age: 23 };
});

Given('you have a JSON object', function() {
  assert.ok(this.hasEmptySource, "You should have a JSON Object provided");
});

When('the object has properties with empty value', function() {
  SK.object.trim(this.hasEmptySource);
});

Then('properties should be removed', function() {
  var expected = { a:1, c:2 };
  assert.ok(SK.object.compare(this.hasEmptySource, expected));
});

Given('your URL is {string}', function(urlStr) {
  this.urlStr = urlStr;
});

When('parameter is provided', function(){
  assert.ok(this.paramSource, "You should have a JSON Object for url parameters");
});

Then('the params should be appended on the URL', function() {
  var urlWithParams = SK.object.toReqParams(this.urlStr, this.paramSource);
  var expected = this.urlStr+"?name=Jeff&age=23";
  assert.equal(urlWithParams, expected);
});
