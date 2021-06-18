import * as puppeteer from "puppeteer";

var browser:puppeteer.Browser
interface ScreenshotSettings {
    viewport?: puppeteer.Viewport
    waitForOptions?: puppeteer.WaitForOptions
}

async function init(){
    browser = await puppeteer.launch()
}

async function getScreenshot(url:string, configs?:ScreenshotSettings){
    const page = await browser.newPage()
    if (configs?.viewport) {
        page.setViewport(configs.viewport)
    }
    await page.goto(url, configs?.waitForOptions)
    const screenshot = await page.screenshot()
    page.close()
    return (screenshot as Buffer)
}

// (async ()=>{
//     await init()
//     const b = await getScreenshot("https://www.baidu.com")
//     console.log(b)
// })()

export default {init, getScreenshot}