const axios = require("axios");
const cheerio = require("cheerio");
//Kuldik scrapelese, obtain, find itemek kategorianak ellenorzese, Quest item kilove
const getQuestItems = async () => {
    let quests = [];
    let $ = null;
    try {
        const {data} = await axios.get("https://escapefromtarkov.fandom.com/wiki/Quests", {
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                Host: "escapefromtarkov.fandom.com",
                "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
            },
        });

        $ = cheerio.load(data);
    } catch (error) {
        console.error("Error while scraping hideout modules. \nError message: " + error);
    } finally {
       if($ !== null) {
           const traders = ["Prapor", "Therapist", "Skier", "Peacekeeper", "Mechanic", "Ragman", "Jaeger", "Fence"];
           traders.forEach((el, i) => {
                
                $(".wikitable." + el + "-content tr").each((i, e) => {
                    let tr = $(e);
                   if(tr.find("td").text().includes("Obtain") ||  tr.find("td").text().includes("Find")){
                       console.log(tr.html());
                   }
                });
           });
       }
    }
}
/*\
    quest_items: [
        0 => {
            quest_name: quest1,
            quest_link; link,
            quest_requirements: [
                0 => {
                    item_name: item,
                    item_amount: amount,
                }
            ]
        }
    ]
*/

exports.getQuestItems = getQuestItems;