import { siteConfig } from "../config/site.config";
import type { Letter } from "../types/content";

const { partnerName, yourName } = siteConfig;

export const letters: Letter[] = [
  {
    id: "smile",
    title: "Open When You Need a Smile",
    teaser: "For the days that need a little more light.",
    body: `Hey ${partnerName},

And if you need a smile, I hope this letter is one. Just smile fine boy`,
  },
  {
    id: "grown",
    title: "Who You've Become",
    teaser: "A small tribute to the person standing here today.",
    body: `${partnerName},

Another year down, and somehow you keep managing to be more you, more sure of what you care about, more patient than you give yourself credit for.

I've watched you handle things this year that weren't easy, and you did it without making a big production out of it. You just quietly figured it out and kept going. I notice that. I want you to know I notice that.

Happy birthday to someone who's genuinely worth celebrating `,
  },
  {
    id: "heart",
    title: "A Letter From My Heart",
    teaser: "No jokes in this one. Just the truth.",
    body: `Mr.Av 😂🌚❤️❤️,

You will probably owe me a kiss after this because I am putting in all the English in my bloodstream for you 😅. And you know I don't do long things, so just know this is love in written form; short, sweet, and very much from the heart.

I just want to say that you mean a lot to me. Like, a real lot. Not in a dramatic "you complete me" kind of way,  more in a "it feels lighter just talking to you and being around you" way. You make ordinary moments feel easy.

Today is your special day, and I want to tell you how I make you feel 😅, yes, that's not an error. Because somehow, I actually like watching you laugh at my not-so-funny jokes. It makes me want to keep making them.

You're kind in a quiet way. You're funny in a way that catches me off guard. And yes, you're annoying sometimes . You're real, and that's rare.

So happy birthday. You deserve good things. You deserve cake. And you probably deserve that kiss I mentioned too.

Love you,
Queen,
${yourName}`,
  },
  {
    id: "remember",
    title: "One Thing I Never Want You to Forget",
    teaser: "Just one. But it's the important one.",
    body: `${partnerName},

Whatever this year brings — the good, the hard, the completely uneventful Tuesdays — I need you to remember one thing:

You are loved. Completely, on purpose, and without conditions attached. Not for what you achieve this year. Not for how impressive your birthday is. Just for being exactly who you are.

Carry that with you. I mean every word of it. Signed Jesus' Love`,

  },
];