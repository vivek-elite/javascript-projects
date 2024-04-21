const epicMixPriyanka = [
    ["Pal-pal dil ke pass", "https://www.youtube.com/watch?v=AMuRRXCuy-4"],
    ["Moh-moh ke dhaage", "https://www.youtube.com/watch?v=peBsfgbOlYM"],
    ["Jab koi baat bigad jaaye", "https://www.youtube.com/watch?v=2iX_WAvNm0k"],
    ["Dil to pagal hai", "https://www.youtube.com/watch?v=lZ2PhyBF3GQ"],
    ["Chandni, o meri Chandni", "https://www.youtube.com/watch?v=dRvvrAmcCJw"],
    ["Tum dil ki dhadkan mein", "https://www.youtube.com/watch?v=3Z_x7vBqr6E"],
    ["Dulhe ka sehra suhana", "https://www.youtube.com/watch?v=iZAv9zDeFSc"],
    ["Ho jaata hai kaise pyaar", "https://www.youtube.com/watch?v=zb_B2sGkJUI"],
    ["Saathiya, sathiya", "https://www.youtube.com/watch?v=eMA6GHTQ4WA"],
    ["O humdum suniyo re", "https://www.youtube.com/watch?v=_9geEbZIAJM"],
    ["So gaya ye jahan", "https://www.youtube.com/watch?v=L4FmY6tuCcs"],
    ["Heeriye, heeriye",  "https://www.youtube.com/watch?v=RLzC55ai0eo"],
  ]
  
  const epicMixVivek = [
    ["Aao bacho tumhain dikhayen", "https://www.youtube.com/watch?v=XiiBsKU4z6c"],
    ["Ae mere pyare watan", "https://www.youtube.com/watch?v=YNZ1n4v9e6k"],
    ["Kisi ki muskurahaton pe", "https://www.youtube.com/watch?v=69pPYkGiEAQ"],
    ["Ruk jaana nahin", "https://www.youtube.com/watch?v=dO7OKASr8lc"], 
    ["Do diwaane shehar main", "https://www.youtube.com/watch?v=uLi3WcON1CU"],
    ["Kisi nazar ko tera intezar", "https://www.youtube.com/watch?v=j8qtywZ6L70"],
    ["Kabhi kabhi mere dil main", "https://www.youtube.com/watch?v=BVnz6oSupUM"],
    ["Madhuban khushboo deta hai", "https://www.youtube.com/watch?v=3DRVa58kAks"],
    ["Dil dhoondta hai", "https://www.youtube.com/watch?v=2RL0XVbs3Us"],
    ["Neela asmaan so gaya", "https://www.youtube.com/watch?v=Z9tZU5MSvBQ"],
    ["Hosh waalon ko khabar kya", "https://www.youtube.com/watch?v=hZuwe72Rtcc"],
    ["Aur ahista kijiye baatain", "https://www.youtube.com/watch?v=HbQud4yWoog"]   
];

const buttonVivek = document.querySelector("#vivek-list");
const buttonPriyanka = document.querySelector("#priyanka-list");
const total = document.querySelector(".total");
const mixList = document.querySelector(".mix");

buttonVivek.addEventListener("click", function() {
    mixInfo(epicMixVivek);
    mixList.classList.remove("hide");
    total.innerText = `Vivek's list - ${epicMixVivek.length} great songs!`;
});

buttonPriyanka.addEventListener("click", function() {
    mixInfo(epicMixPriyanka);
    mixList.classList.remove("hide");
    total.innerText = `Priyanka's list - ${epicMixPriyanka.length} great songs!`;
});

const mixInfo = function(mix) {
    // Remove existing child elements of the ul
    while(mixList.firstChild) {
        mixList.removeChild(mixList.firstChild); 
    }

    // Add song details to the ul
    mix.forEach(function(song, index){
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<div class="song-number">#${index+1}</div>
            <div class="song-name"> ${song[0]}</div>
            <div class="song-watch">
            <a href="${song[1]}" target="_blank">
            <img src="img/youtube-logo.png"><br>
            Watch Video
            </a>
            </div>
        `;
        mixList.append(li);
    });
}
