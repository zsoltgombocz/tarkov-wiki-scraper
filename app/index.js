const hideoutScraper = require("./scrapers/hideoutScraper");

const WIKI_URL = "https://escapefromtarkov.fandom.com/wiki/";
let hideout_modules = {};

/*hideout_modules = [
    0 => {
        module_name,
        levels: [
            0 => [
                0 => {
                    item_name: item_name,
                    item_amount: int,
                },
                1 => {
                    item_name: item_name1,
                    item_amount: int,
                },
            ]
        ]
    }
]*/

hideoutScraper.getHideoutModules(WIKI_URL);










