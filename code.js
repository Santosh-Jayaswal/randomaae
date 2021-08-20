window.onload = function() {
    let aae = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः"]
let btn = document.getElementById("random")
let msg = document.querySelector("p")

btn.addEventListener("click", function(){ 
    let items = Math.floor(Math.random() * aae.length)
    msg.innerText = aae[items]
});
}