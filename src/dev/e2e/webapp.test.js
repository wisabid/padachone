const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices['iPhone 6'];
let browser, page;

describe("Padachone webapp", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: false,
      slowMo: 35
    });
    page = await browser.newPage();

    await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });

    // await page.setViewport({ width: 375, height: 667 });
    await page.emulate(iPhone);
  });

  afterAll(async () => {
    //await browser.close();
  });
  it("works fine on click of fast forward", () => {
    (async () => {
      await page.waitForSelector(".admirer-msg .MuiSnackbarContent-action button")
      await page.click(".admirer-msg .MuiSnackbarContent-action button");
      await page.waitForSelector(".cookieConsent button");
      await page.click(".cookieConsent button");
      await page.screenshot({path: './src/dev/e2e/landing-page.png'});
      await page.waitForSelector(".App .Home");
      await page.click(".App .Home");
      await page.screenshot({path: './src/dev/e2e/setup.png'});



      
  
  await page.waitForSelector('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249')
  await page.click('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249')
  
  await page.select('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249', 'Netherlands')
  
  await page.waitForSelector('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  await page.click('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  
  await page.waitForSelector('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249')
  await page.click('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249')
  
  await page.select('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .makeStyles-selfont-249', 'Noord-Holland')
  
  await page.waitForSelector('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  await page.click('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  
  await page.waitForSelector('#place-name')
  await page.click('#place-name')

  await page.type("#place-name", "Ijburg");

  await page.waitForSelector('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  await page.click('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  
  
  // await page.waitForSelector('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTypography-root')
  // await page.click('.MuiStepContent-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTypography-root')
  
  // await page.waitForSelector('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  // await page.click('.MuiCollapse-wrapperInner > .makeStyles-actionsContainer-246 > div > .MuiButton-contained > .MuiButton-label')
  
  // await page.waitForSelector('.MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label')
  // await page.click('.MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label')
  
    })();
  });

  // it("navigates through fine", () => {
  //   (async () => {
  //   //   const browser = await puppeteer.launch();
  //   //   const page = await browser.newPage();

  //   //   await page.goto("http://localhost:3000/");

  //   //   await page.setViewport({ width: 414, height: 736 });

  //     await page.waitForSelector(
  //       ".MuiGrid-root:nth-child(3) > .MuiPaper-root > .MuiCardContent-root > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root"
  //     );
  //     await page.click(
  //       ".MuiGrid-root:nth-child(3) > .MuiPaper-root > .MuiCardContent-root > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root"
  //     );

  //     await page.waitForSelector(
  //       ".MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label"
  //     );
  //     await page.click(
  //       ".MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label"
  //     );

  //     await page.waitForSelector(
  //       ".MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label"
  //     );
  //     await page.click(
  //       ".MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label"
  //     );

  //   //   await browser.close();
  //   })();
  // });
}, 20000);
