const axios = require("axios");
const cheerio = require("cheerio");

const getHideoutModules = async (base_url) => {
    let modules = [];
    let $ = null;
    try {
        const {data} = await axios.get('https://escapefromtarkov.fandom.com/wiki/Hideout', {
            headers: {
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                Host: 'escapefromtarkov.fandom.com',
                'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
            },
        });

        $ = cheerio.load(data);
    } catch (error) {
        console.error("Error while scraping hideout modules. \nError message: " + error);
    } finally {
        $('.wikitable tr:first-child th:first-child').each((i, e) => {
            let html = $(e).html();
            module_name  = html.toString().replace(/(<).*/, "").trim();
            modules[i] = {
                module_name,
                levels: []
            };
        });
    }
    modules.pop();

    console.log(modules);
};


exports.getHideoutModules = getHideoutModules;