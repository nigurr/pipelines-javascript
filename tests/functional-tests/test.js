var fs = require('fs');
var webdriver = require('selenium-webdriver'),
{describe, it, after, before} = require('selenium-webdriver/testing');

By = webdriver.By,
until = webdriver.until;
var driver;

describe('node js sample test scenarios', function(){
  this.timeout(10000);
  afterEach(() => driver.quit());

  it('Content should match - firefox', function() {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('https://nodejssampledoc.azurewebsites.net/');

    var element = driver.findElement(By.tagName('body'));
    driver.wait(function(){
      return element.getText().then(function(content){
        return content === 'Hello Node.js Sample!';
      });
    }, 5000);

    //take a screenshot of the page as is and save as yellow.png
    driver.takeScreenshot().then(function(data) {
      writeScreenshot(data, 'screenshot-firefox.png');
    });

  });

  it.skip('Content should match - chrome', function() {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://nodejssampledoc.azurewebsites.net/');

    var element = driver.findElement(By.tagName('body'));
    driver.wait(function(){
      return element.getText().then(function(content){
        return content === 'Hello Node.js Sample!';
      });
    }, 5000);

    //take a screenshot of the page as is and save as yellow.png
    driver.takeScreenshot().then(function(data) {
      writeScreenshot(data, 'screenshot-chrome.png');
    });

    // For querying wwww.google.com
    //var query = driver.wait(until.elementLocated(By.name('q')));
    //query.sendKeys('webdriver\n');
    //driver.wait(until.titleIs('webdriver - Google Search'));
  });

  function writeScreenshot(data, name) {
    name = name || 'screenshot.png';
    try {
      fs.writeFileSync(name, data, 'base64');
    }
    catch (e) {
      console.log(e);
    }
  };

});