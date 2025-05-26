document.title = "The Helix Conifg Repository";
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'media/THCR.svg';

const texts = [
            "Remember to check your email!",
            "Urban Dictionary is banned on my school Wi-Fi",
            "Im not delusional you are!",
            "Stop looking up here! things are better down there!",
            "No useful info up here!",
            "Codeberg is holding me hostage",
            "Github is holding me hostage",
            "Shut up SysAd",
            "IM THE ONE PERCENT MINORITY!",
            "2b2t.org is a child friendly MC server",
            "Your repo, The repo she tells you not to worry about",
            "Only uses monospace fonts for coding",
            "Click here to claim your once in a life time 1million dollars 111!!!1!!1",
            "Official supporter of JS Library Haters",
            "Official supporter of NodeJS Haters",
            "Built with love",
            "--better --configs",
            "TOML or CONF?",
            "Bring the pain!"
        ];
const randomIndex = Math.floor(Math.random() * texts.length);
console.log(texts[randomIndex]);
let out = texts[randomIndex];
document.getElementById("randomText").innerText=out;
