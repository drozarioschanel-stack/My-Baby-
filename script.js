// --- FALLING HEARTS + S+K + EMOJIS ---
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const options = ["S+K", "❤️", "💕", "💗", "💓", "💖", "✨"];
    heart.innerText = options[Math.floor(Math.random() * options.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.getElementById("heartRain").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 150);

// --- Typing Message ---
let messageLines = [
    "> Kane, I love you so much!!!",
    "> I love you more than you know",
    "> I fall in love harder and deeper with you every day!",
    "> My world, my love, I would do anything for you",
    "> My bun bun, I love you ∞ +1💗"
];

let lineIndex = 0;
let techMessage = document.getElementById("techMessage");
let loveButton = document.getElementById("loveButton");

function typeLine() {
    if (lineIndex < messageLines.length) {
        let line = messageLines[lineIndex];
        let charIndex = 0;

        function typeChar() {
            if (charIndex < line.length) {
                techMessage.innerHTML += line.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 50);
            } else {
                techMessage.innerHTML += "<br>";
                lineIndex++;
                setTimeout(typeLine, 300);
            }
        }
        typeChar();
    } else {
        loveButton.classList.remove("hidden");
    }
}

typeLine();

// --- FIRST Click Me: Show Countdown ---
loveButton.addEventListener("click", function () {
    document.getElementById("countdownContainer").classList.remove("hidden");
    this.style.display = "none";

    document.getElementById("afterCountdownText").innerHTML =
        "I can't wait to see you💖<br>I can't wait to hug you ❤️<br>I can't wait to kiss you 💕<br>Counting the days…";

    loveLetterButton.classList.remove("hidden");
});

// --- Countdown (based on local time, day ends at 12 AM local) ---
const targetDateLocal = new Date("January 10, 2026 05:30:00");

function updateCountdown() {
    const now = new Date();
    let distance = targetDateLocal.getTime() - now.getTime();

    if (distance < 0) {
        document.getElementById("countdownTimer").innerHTML = "MY BABY IS BACK!!! ❤️🎉";
        return;
    }

    const totalSeconds = Math.floor(distance / 1000);
    const days = Math.floor(totalSeconds / (24*60*60));
    const hours = Math.floor((totalSeconds % (24*60*60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("countdownTimer").innerHTML =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- SECOND Click Me: Show Love Letter ---
let loveLetterButton = document.getElementById("loveLetterButton");
let loveLetterSection = document.getElementById("loveLetterSection");
let loveLetterText = document.getElementById("loveLetterText");

let letterLines = [
"My Kane,",
"Falling for you was the most unplanned thing in my life, and somehow it turned out to be the best thing that has ever happened to me. I didn't expect you. I didn't expect the way you would slip into my life, slowly at first, and then all at once, like you were always meant to be here.",
"",
"You've become this soft, steady presence I never knew I needed. The kind of comfort that doesn't have to announce itself, it's just there, settling into the spaces I thought would stay empty forever. And every day, whether we're together or miles apart, you keep proving to me that love is real, that connection is real, that the right person feels like home more than any place ever could.",
"",
"Being away from you reminds me of just how much your presence means to me. It's in the silence, in the still moments where nothing much is happening, that I feel the weight of how much I need you. Even the smallest things, hearing our song, turning over in bed, walking past a place we've been, remind me that life feels different when you're not right next to me. Not bad, just... incomplete. Like the world is slightly out of focus until I hear your voice again.",
"",
"I don't know what the future holds, I really don't. Life is unpredictable and messy, and sometimes terrifying. But what I do know, what I feel deep in my bones, is that I want you in it. Every chapter. every high. Every low. Every version of the future I imagine has you in it, not because I'm afraid to let go, but because loving you feels like the most natural thing I've ever done.",
"",
"You've become this person I want to share my mornings with, my nights with, my doubts, my dreams, my mess, my growth. I want to see who we become together, how we stretch, how we learn, how we keep choosing each other in all the quiet ways that matter. I want a life where your hand is the one I reach for without thinking. Where your laughter fills the spaces where fear used to live. Where \"us\" is something we build, protect, and carry with pride.",
"",
"And maybe the future will surprise us. maybe we'll change, maybe life will shift, maybe we'll face things we can't predict right now. But I'm not scared of any of it, because loving you has already shown me that some things are worth holding on to, worth fighting for, worth growing with. ",
"",
"I want all of you in my future your heart, your flaws, yur dreams, your softness, your fire, your everything. Not because I need you to complete me, but because you make my life richer, deeper, more honest. You make me want to be someone better. Someone stronger. Someone who can stand beside you, not just today, but in all the tomorrows we haven't lived yet. ",
"",
"You are simply, the best thing that ever happened to me. And I mean that with every piece of me that has learned how to love because of you ",
"",
"Forever your Nel, always."
];

loveLetterButton.addEventListener("click", function () {
    loveLetterSection.classList.remove("hidden");

    let lineIndex2 = 0;
    function typeLetterLine() {
        if (lineIndex2 < letterLines.length) {
            loveLetterText.innerHTML += letterLines[lineIndex2] + "<br>";
            lineIndex2++;
            setTimeout(typeLetterLine, 150);
        }
    }
    typeLetterLine();

    loveLetterButton.style.display = "none"; 
});
