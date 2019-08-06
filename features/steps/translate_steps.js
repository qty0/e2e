const chai = require('chai').use(require('chai-as-promised'));
const expect = require('chai').expect;

var CalculatorSteps = function() {

  var TranslatePage = require("../pages/translate_page.js");


  this.World = function MyWorld() {
    this.page = new TranslatePage();
  };

  this.Given('The Translate is open', function (callback) {
    this.page.get();
    callback();
  });

  this.When('I enter $string', async function myF(string) {
   await this.page.setFirstValue(string);
    return true;
  });

  this.When('I wait $int seconds',{timeout: 400 * 1000}, async function wN(int) {
        await this.page.waitNow(int);
        return true
    });


  this.When('I select English as first', async function cl() {
    await this.page.clickEngF();
    return true
  });

  this.When('I select German as second', async function cg() {
        await this.page.clickGerS()
        return true
    });

  this.When('I see $stringg as translated', async function end(stringg) {
      await this.page.checkTrans(stringg)
    })

};

module.exports = CalculatorSteps;