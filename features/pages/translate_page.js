
var CalculatorPage = function() {
    var expect = require('chai').expect;
  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://translate.google.com/', 50000);
  };
  this.setFirstValue = async function asd(value) {
       await element(by.className('orig tlid-source-text-input goog-textarea')).sendKeys(value);
      };

  this.waitNow = async (int) =>{
        await browser.sleep(int * 1000)
    }

  this.clickEngF = async() => {
        await element(by.className('sl-more tlid-open-source-language-list')).click();
        await element.all(by.className('language_list_item')).get(21).click()
  }

  this.clickGerS = async() => {
        await element(by.className('tl-more tlid-open-target-language-list')).click();
        await element.all(by.className('language_list_item_wrapper language_list_item_wrapper-de')).get(2).click()
    }

  this.checkTrans = async(stringg) => {
     await browser.sleep(700);
      return expect(element.all(by.className('translation')).get(0).getText()).to.eventually.equal(stringg)
    }


};

module.exports = CalculatorPage;
