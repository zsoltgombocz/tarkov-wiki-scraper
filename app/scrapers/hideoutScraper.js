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

        $('.wikitable').each((indexOfTable, e) => {

            const table = $(e);
            for(let i = 3; i <= 5; i++) {
                let tr = $(table.find('tr:nth-child('+ i +')'));
                if(tr.length !== 0) {
                    let list_of_reqs = $(tr.find('td > ul').first());

                    modules[indexOfTable].levels[i-3] = [];

                    list_of_reqs.find('li').each((index_of_lis, li) => {
                        li = $(li);
                        if(li.text().includes("Roubles") || li.text().includes("Dollars") || li.text().includes("Euros")){
                            //Here comes the money requirements
                        }else if(li.text().includes("LL2") || li.text().includes("LL3") || li.text().includes("LL4")) {
                            //Trader level requirements
                        }else if(li.text().includes("Level")) {
                            //Hideout modules or player stat (strenght etc...)  
                        }else if(li.text().includes("Purchase")) {
                            //Purchase of any game expansion
                        }else {
                            //item requirements
                            let li_html_splitted = li.html().split(" <a ");
                            const amount = li_html_splitted[0];

                            li_html_splitted = li_html_splitted[1].split("\"");
                            const name = li_html_splitted[3];
                            const link = li_html_splitted[1];
                            let item_requirements_array = modules[indexOfTable].levels[i-3];
                            item_requirements_array.push({                       
                                item_name: name,
                                item_amount: amount,
                                item_link: link 
                            });
                        }
                    });
                }
               
            }
        });
    }
    modules.pop();

    console.log(modules);
};


exports.getHideoutModules = getHideoutModules;