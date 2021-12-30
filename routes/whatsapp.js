// const express = require('express');
// const router = express.Router();
// const puppeteer = require('puppeteer');



// async function scrape(url) {

//     async function getPage() {
//         if (this.page) {
//             return this.page;
//         }
//         const browser = await this.getBrowser();
//         this.page = await browser.newPage();
//         return this.page;
//     }
//     const browser = await puppeteer.launch({ headless: false });
//     await page.getPage(url);
//     await page.waitForSelector("span [title='Ko Steven']");
//     const target = await page.$("span [title='Ko Steven']");
//     await target.click();
//     const inp = await page.$("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text");

//     for (let i = 0; i < 5; i++) {
//         await inp.type('This is Magic !!! !');
//         await page.keyboard.press("Enter")
//     }
// }

// scrape('https://web.whatsapp.com')

// router.get('/', async (req, res) => {
//     try {
//     } catch (err) {
//         res.json({ message: err });
//     }
// });



// module.exports = router;