const puppeteer = require('puppeteer');
const faker = require('faker');

const lead = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};
let page;
let browser;
const width = 1920;
const height = 1080;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto('http://localhost:3000/');
});
afterAll(() => {
  browser.close();
});
describe("Contact form", () => {
  test("lead can submit a contact request", async () => {
    await page.waitForSelector("[data-type=tag]");
    await page.click("input[data-type=tag]");
    await page.type("input[data-type=tag]", 'cms');
    await page.select("select[data-type=language]", 'ruby');
    await page.click("button[type=submit]");
    await page.waitForSelector("[data-type=changeLike]");
    await page.click("[data-type=changeLike]")
    await page.click("li[data-route=my-list]");
    await page.click("[data-change=line]");
    await page.click("[data-type=changeLike]");
    await page.waitFor(2000);
  }, 16000);
});