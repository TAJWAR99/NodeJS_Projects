const cheerio = require('cheerio')
const request = require('request')

request('https://www.scraping-bot.io/web-scraping-blog/', (err, res, html) => {
    if(!err && res.statusCode == 200){
        const $ = cheerio.load(html)
        const siteHeading = $('.elementor-heading-title')

        const output = siteHeading.find('a').text()
        //console.log(siteHeading.html())
        //console.log(siteHeading.text())
        console.log(output)
    }
})