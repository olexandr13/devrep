const assert = require('assert');
const po = require('../../src/po');

const page = new po();

describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    console.log(page.title);
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    console.log(title);
    assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  })
})