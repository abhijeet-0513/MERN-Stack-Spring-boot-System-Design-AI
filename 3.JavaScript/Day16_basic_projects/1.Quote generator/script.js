const quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { quote: "I have a dream.", author: "Martin Luther King Jr." },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    quote: "You miss 100% of the shots you never take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote:
      "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    author: "James Baldwin",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  { quote: "A man is but what he believes.", author: "Mahatma Gandhi" },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  { quote: "What we think, we become.", author: "Buddha" },
  {
    quote:
      "Our greatest glory is not in never failing, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou",
  },
  { quote: "When you know better, you do better.", author: "Maya Angelou" },
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote: "You miss 100% of the chances you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "Don’t count the days; make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote:
      "Perseverance is not a long race; it is many short races one after another.",
    author: "Walter Elliot",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
];

const button = document.querySelector("button");
const quote = document.querySelector("h2");
const author = document.querySelector("p");
button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * 50);
  quote.textContent = quotes[index].quote;
  author.textContent = `___${quotes[index].author}`;
});
