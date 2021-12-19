const hideoutScraper = require("./scrapers/hideoutScraper");

const WIKI_URL = "https://escapefromtarkov.fandom.com/wiki/";
let hideout_modules = {};

/*hideout_modules = [
    0 => {
        module_name,
        levels: [
            0 => [
                items: [
                    0 => {
                        item_name: item_name,
                        item_amount: int,
                        item_link: link
                    },
                    1 => {
                        item_name: item_name1,
                        item_amount: int,
                        item_link: link
                    },
                ], 
                money: [
                    'string', 'string;
                ],
                trader_lvl: [
                    0 => {
                        trader_name: trader_name,
                        trader_level: req_level,
                        trader_link: link
                    },
                    1 => {
                        trader_name: trader_name1,
                        trader_level: req_level,
                        trader_link: link
                    },
                ],
                hideout_module: [
                    0 => {
                        module_name: module,
                        module_level: req_level,
                        module_link: link
                    },
                    1 => {
                        module_name: module1,
                        module_level: req_level,
                        module_link: link
                    },
                ],
                player_stat: [
                    0 => {
                        stat_name: stat,
                        stat_level: req_level,
                        stat_link: link
                    },
                    1 => {
                        stat_name: stat1,
                        stat_level: req_level,
                        stat_link: link
                    },
                ]

                
            ]
        ]
    }
]*/

hideoutScraper.getHideoutModules(WIKI_URL);










