const quotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "WINSTON CHURCHILL" },
{ text: "Believe you can and you're halfway there.", author: "THEODORE ROOSEVELT" },
{ text: "Everything you’ve ever wanted is on the other side of fear.", author: "GEORGE ADDAIR" },
{ text: "Opportunities don't happen. You create them.", author: "CHRIS GROSSER" },
{ text: "Do what you can, with what you have, where you are.", author: "THEODORE ROOSEVELT" },
{ text: "Start where you are. Use what you have. Do what you can.", author: "ARTHUR ASHE" },
{ text: "Dream big and dare to fail.", author: "NORMAN VAUGHAN" },
{ text: "The only limit to our realization of tomorrow is our doubts of today.", author: "FRANKLIN D. ROOSEVELT" },
{ text: "Act as if what you do makes a difference. It does.", author: "WILLIAM JAMES" },
{ text: "Quality is not an act, it is a habit.", author: "ARISTOTLE" },
{ text: "I am not a product of my circumstances. I am a product of my decisions.", author: "STEPHEN COVEY" },
{ text: "Don't watch the clock; do what it does. Keep going.", author: "SAM LEVENSON" },
{ text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. LEWIS" },
{ text: "With the new day comes new strength and new thoughts.", author: "ELEANOR ROOSEVELT" },
{ text: "Limit your 'always' and your 'nevers'.", author: "AMY POEHLER" },
{ text: "We must be willing to let go of the life we planned to have the life that is waiting for us.", author: "JOSEPH CAMPBELL" },
{ text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "RALPH WALDO EMERSON" },
{ text: "Success usually comes to those who are too busy to be looking for it.", author: "HENRY DAVID THOREAU" },
{ text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "UNKNOWN" },
{ text: "Don’t wish it were easier. Wish you were better.", author: "JIM ROHN" },
{ text: "Push yourself, because no one else is going to do it for you.", author: "UNKNOWN" },
{ text: "Great things are done by a series of small things brought together.", author: "VINCENT VAN GOGH" },
{ text: "Success doesn’t just find you. You have to go out and get it.", author: "UNKNOWN" },
{ text: "Don’t wait for opportunity. Create it.", author: "GEORGE BERNARD SHAW" },
{ text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "WALT WHITMAN" },
{ text: "You don’t have to be great to start, but you have to start to be great.", author: "ZIG ZIGLAR" },
{ text: "Do something today that your future self will thank you for.", author: "SEAN PATRICK FLANERY" },
{ text: "Little things make big days.", author: "ISABEL MARANT" },
{ text: "It always seems impossible until it is done.", author: "NELSON MANDELA" },
{ text: "The secret of getting ahead is getting started.", author: "MARK TWAIN" },
{ text: "Only the paranoid survive.", author: "ANDY GROVE" },
{ text: "I find that the harder I work, the more luck I seem to have.", author: "THOMAS JEFFERSON" },
{ text: "Don’t be afraid to give up the good to go for the great.", author: "JOHN D. ROCKEFELLER" },
{ text: "If you really look closely, most overnight successes took a long time.", author: "STEVE JOBS" },
{ text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "COLIN POWELL" },
{ text: "The only place where success comes before work is in the dictionary.", author: "VIDAL SASSOON" },
{ text: "Try not to become a man of success. Rather become a man of value.", author: "ALBERT EINSTEIN" },
{ text: "Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "ZIG ZIGLAR" },
{ text: "The road to success and the road to failure are almost exactly the same.", author: "COLIN R. DAVIS" },
{ text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "WINSTON CHURCHILL" },
{ text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "JIM ROHN" },
{ text: "The ones who are crazy enough to think they can change the world, are the ones that do.", author: "STEVE JOBS" },
{ text: "Work hard in silence, let your success be your noise.", author: "FRANK OCEAN" },
{ text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.", author: "EARL NIGHTINGALE" },
{ text: "Go as far as you can see; when you get there, you’ll be able to see further.", author: "THOMAS CARLYLE" },
{ text: "Build your own dreams, or someone else will hire you to build theirs.", author: "FARRAH GRAY" },
{ text: "Everything you can imagine is real.", author: "PABLO PICASSO" },
{ text: "Be so good they can’t ignore you.", author: "STEVE MARTIN" },
{ text: "Don’t count the days, make the days count.", author: "MUHAMMAD ALI" }

];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const newQuoteBtn = document.getElementById('new-quote');

// Color palettes for body and quote box
const bodyColors = [
    "#c945ea", "#89a7d6", "#f7b267", "#f4845f", "#43bccd",
    "#a1e3a1", "#f7cac9", "#b2b1cf", "#f6e7cb", "#e2d6cf"
];
const boxColors = [
    "rgba(255,255,255,0.18)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.30)",
    "rgba(255,255,255,0.22)", "rgba(255,255,255,0.20)", "rgba(255,255,255,0.28)",
    "rgba(255,255,255,0.15)", "rgba(255,255,255,0.35)", "rgba(255,255,255,0.32)", "rgba(255,255,255,0.24)"
];

// Function to fetch and display a random quote
function displayRandomQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[idx];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
}

// Function to change background colors
function changeColors() {
    const bodyIdx = Math.floor(Math.random() * bodyColors.length);
    const boxIdx = Math.floor(Math.random() * boxColors.length);
    document.body.style.background = bodyColors[bodyIdx];
    quoteBox.style.background = boxColors[boxIdx];
}

newQuoteBtn.addEventListener('click', () => {
    quoteBox.classList.add('flip');
    setTimeout(() => {
        displayRandomQuote();
        changeColors();
        quoteBox.classList.remove('flip');
    }, 300); // Halfway through the animation
})