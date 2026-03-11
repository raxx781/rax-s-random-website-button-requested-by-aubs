const sites = [

"https://www.youtube.com/?r=475282",
"https://www.nytimes.com/?r=795833",
"https://www.coolmathgames.com/?r=700454",
"https://www.mozilla.org/?r=781640",
"https://www.github.com/?r=711605",
"https://www.khanacademy.org/?r=154143",
"https://neal.fun/?r=640626",
"https://archive.org/?r=542099",
"https://www.twitch.tv/?r=235256",
"https://www.wikipedia.org/?r=297979",
"https://www.imdb.com/?r=184654",
"https://www.reddit.com/?r=19424",
"https://www.bbc.com/?r=965614",
"https://www.cnn.com/?r=178035",
"https://www.stackoverflow.com/?r=417902",
"https://openai.com/?r=298991",
"https://www.microsoft.com/?r=631950"

];

function goRandom(){

const randomIndex = Math.floor(Math.random() * sites.length);

window.location.href = sites[randomIndex];

}
