var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so don't waste it living someone else's life.",
"If life were predictable it would cease to be life, and be without flavor.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"The best and most beautiful things in the world cannot be seen, they must be felt with the heart.",
"Money and success don’t change people; they merely amplify what is already there.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
"The future belongs to those who believe in the beauty of their dreams.",
"When you reach the end of your rope, tie a knot in it and hang on."]
var authors = ["-NELSON MANDEL","-WALT DISNEY","-STEVE JOBS","-ELEANOR ROOSEVELT","-MOTHER TERESA","-HELEN KELLER","-WILL SMITH","-BENJAMIN FRANKLIN","-ELEANOR ROOSEVELT","-FRANKLIN D. ROOSEVELT"];
function newQuote(){
    var r = Math.floor(Math.random()*quotes.length);
    document.getElementById('n').innerHTML=quotes[r];
    document.getElementById('author').innerHTML=authors[r];
}