import screenshot from './dist/screenshoter.js'

(async ()=>{
    await screenshot.init()
    const b = await screenshot.getScreenshot("http://www.baidu.com")
    console.log('bytes:', b)
})()